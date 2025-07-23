// @vitest-environment node
import { describe, expect, it, vi } from 'vitest';

import { getCanonicalUrl } from '@/server/utils/url';

import { LAST_MODIFIED, Sitemap, SitemapType } from './sitemap';

describe('Sitemap', () => {
  const sitemap = new Sitemap();

  describe('getIndex', () => {
    it('should return a valid sitemap index with pagination', async () => {
      // Mock the page count methods to return specific values for testing
      vi.spyOn(sitemap, 'getPluginPageCount').mockResolvedValue(2);
      vi.spyOn(sitemap, 'getAssistantPageCount').mockResolvedValue(3);
      vi.spyOn(sitemap, 'getMcpPageCount').mockResolvedValue(1);
      vi.spyOn(sitemap, 'getModelPageCount').mockResolvedValue(2);

      const index = await sitemap.getIndex();
      expect(index).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(index).toContain('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

      // Check static sitemaps
      [SitemapType.Pages, SitemapType.Providers].forEach((type) => {
        expect(index).toContain(`<loc>${getCanonicalUrl(`/sitemap/${type}.xml`)}</loc>`);
      });

      // Check paginated sitemaps
      expect(index).toContain(`<loc>${getCanonicalUrl('/sitemap/plugins-1.xml')}</loc>`);
      expect(index).toContain(`<loc>${getCanonicalUrl('/sitemap/plugins-2.xml')}</loc>`);
      expect(index).toContain(`<loc>${getCanonicalUrl('/sitemap/assistants-1.xml')}</loc>`);
      expect(index).toContain(`<loc>${getCanonicalUrl('/sitemap/assistants-2.xml')}</loc>`);
      expect(index).toContain(`<loc>${getCanonicalUrl('/sitemap/assistants-3.xml')}</loc>`);
      expect(index).toContain(`<loc>${getCanonicalUrl('/sitemap/mcp-1.xml')}</loc>`);
      expect(index).toContain(`<loc>${getCanonicalUrl('/sitemap/models-1.xml')}</loc>`);
      expect(index).toContain(`<loc>${getCanonicalUrl('/sitemap/models-2.xml')}</loc>`);

      expect(index).toContain(`<lastmod>${LAST_MODIFIED}</lastmod>`);
    });
  });

  describe('getPage', () => {
    it('should return a valid page sitemap', async () => {
      const pageSitemap = await sitemap.getPage();
      expect(pageSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/'),
          changeFrequency: 'monthly',
          priority: 0.4,
        }),
      );
      expect(pageSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover'),
          changeFrequency: 'daily',
          priority: 0.7,
        }),
      );
      // Note: The actual implementation generates URLs like /discover/assistant and /discover/plugin (not category-specific)
      expect(pageSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/assistant'),
          changeFrequency: 'daily',
          priority: 0.7,
        }),
      );
      expect(pageSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/plugin'),
          changeFrequency: 'daily',
          priority: 0.7,
        }),
      );
    });
  });

  describe('getAssistants', () => {
    it('should return a valid assistants sitemap without pagination', async () => {
      vi.spyOn(sitemap['discoverService'], 'getAssistantIdentifiers').mockResolvedValue([
        // @ts-ignore
        { identifier: 'test-assistant', lastModified: '2023-01-01' },
      ]);

      const assistantsSitemap = await sitemap.getAssistants();
      expect(assistantsSitemap.length).toBe(15);
      expect(assistantsSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/assistant/test-assistant'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
      expect(assistantsSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/assistant/test-assistant?hl=zh-CN'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
    });

    it('should return a valid assistants sitemap with pagination', async () => {
      const mockAssistants = Array.from({ length: 150 }, (_, i) => ({
        identifier: `test-assistant-${i}`,
        lastModified: '2023-01-01',
      }));

      vi.spyOn(sitemap['discoverService'], 'getAssistantIdentifiers').mockResolvedValue(
        // @ts-ignore
        mockAssistants,
      );

      // Test first page (should have 100 items)
      const firstPageSitemap = await sitemap.getAssistants(1);
      expect(firstPageSitemap.length).toBe(100 * 15); // 100 items * 15 locales
      expect(firstPageSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/assistant/test-assistant-0'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );

      // Test second page (should have 50 items)
      const secondPageSitemap = await sitemap.getAssistants(2);
      expect(secondPageSitemap.length).toBe(50 * 15); // 50 items * 15 locales
      expect(secondPageSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/assistant/test-assistant-100'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
    });
  });

  describe('getPlugins', () => {
    it('should return a valid plugins sitemap without pagination', async () => {
      vi.spyOn(sitemap['discoverService'], 'getPluginIdentifiers').mockResolvedValue([
        // @ts-ignore
        { identifier: 'test-plugin', lastModified: '2023-01-01' },
      ]);

      const pluginsSitemap = await sitemap.getPlugins();
      expect(pluginsSitemap.length).toBe(15);
      expect(pluginsSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/plugin/test-plugin'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
      expect(pluginsSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/plugin/test-plugin?hl=ja-JP'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
    });

    it('should return a valid plugins sitemap with pagination', async () => {
      const mockPlugins = Array.from({ length: 250 }, (_, i) => ({
        identifier: `test-plugin-${i}`,
        lastModified: '2023-01-01',
      }));

      vi.spyOn(sitemap['discoverService'], 'getPluginIdentifiers').mockResolvedValue(
        // @ts-ignore
        mockPlugins,
      );

      // Test first page (should have 100 items)
      const firstPageSitemap = await sitemap.getPlugins(1);
      expect(firstPageSitemap.length).toBe(100 * 15); // 100 items * 15 locales

      // Test third page (should have 50 items)
      const thirdPageSitemap = await sitemap.getPlugins(3);
      expect(thirdPageSitemap.length).toBe(50 * 15); // 50 items * 15 locales
    });
  });

  describe('getModels', () => {
    it('should return a valid models sitemap without pagination', async () => {
      vi.spyOn(sitemap['discoverService'], 'getModelIdentifiers').mockResolvedValue([
        // @ts-ignore
        { identifier: 'test:model', lastModified: '2023-01-01' },
      ]);

      const modelsSitemap = await sitemap.getModels();
      expect(modelsSitemap.length).toBe(15);
      expect(modelsSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/model/test:model'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
      expect(modelsSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/model/test:model?hl=ko-KR'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
    });

    it('should return a valid models sitemap with pagination', async () => {
      const mockModels = Array.from({ length: 120 }, (_, i) => ({
        identifier: `test:model-${i}`,
        lastModified: '2023-01-01',
      }));

      vi.spyOn(sitemap['discoverService'], 'getModelIdentifiers').mockResolvedValue(
        // @ts-ignore
        mockModels,
      );

      // Test first page (should have 100 items)
      const firstPageSitemap = await sitemap.getModels(1);
      expect(firstPageSitemap.length).toBe(100 * 15); // 100 items * 15 locales

      // Test second page (should have 20 items)
      const secondPageSitemap = await sitemap.getModels(2);
      expect(secondPageSitemap.length).toBe(20 * 15); // 20 items * 15 locales
    });
  });

  describe('getMcp', () => {
    it('should return a valid mcp sitemap without pagination', async () => {
      vi.spyOn(sitemap['discoverService'], 'getMcpIdentifiers').mockResolvedValue([
        // @ts-ignore
        { identifier: 'test-mcp', lastModified: '2023-01-01' },
      ]);

      const mcpSitemap = await sitemap.getMcp();
      expect(mcpSitemap.length).toBe(15);
      expect(mcpSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/mcp/test-mcp'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
      expect(mcpSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/mcp/test-mcp?hl=zh-CN'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
    });

    it('should return a valid mcp sitemap with pagination', async () => {
      const mockMcps = Array.from({ length: 80 }, (_, i) => ({
        identifier: `test-mcp-${i}`,
        lastModified: '2023-01-01',
      }));

      vi.spyOn(sitemap['discoverService'], 'getMcpIdentifiers').mockResolvedValue(
        // @ts-ignore
        mockMcps,
      );

      // Test first page (should have 80 items, all on first page)
      const firstPageSitemap = await sitemap.getMcp(1);
      expect(firstPageSitemap.length).toBe(80 * 15); // 80 items * 15 locales
    });
  });

  describe('getProviders', () => {
    it('should return a valid providers sitemap', async () => {
      vi.spyOn(sitemap['discoverService'], 'getProviderIdentifiers').mockResolvedValue([
        // @ts-ignore
        { identifier: 'test-provider', lastModified: '2023-01-01' },
      ]);

      const providersSitemap = await sitemap.getProviders();
      expect(providersSitemap.length).toBe(15);
      expect(providersSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/provider/test-provider'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
      expect(providersSitemap).toContainEqual(
        expect.objectContaining({
          url: getCanonicalUrl('/discover/provider/test-provider?hl=ar'),
          lastModified: '2023-01-01T00:00:00.000Z',
        }),
      );
    });
  });

  describe('page count methods', () => {
    it('should return correct plugin page count', async () => {
      vi.spyOn(sitemap['discoverService'], 'getPluginIdentifiers').mockResolvedValue(
        // @ts-ignore
        Array.from({ length: 150 }, (_, i) => ({ identifier: `plugin-${i}` })),
      );

      const pageCount = await sitemap.getPluginPageCount();
      expect(pageCount).toBe(2); // 150 items / 100 per page = ceil(1.5) = 2 pages
    });

    it('should return correct assistant page count', async () => {
      vi.spyOn(sitemap['discoverService'], 'getAssistantIdentifiers').mockResolvedValue(
        // @ts-ignore
        Array.from({ length: 250 }, (_, i) => ({ identifier: `assistant-${i}` })),
      );

      const pageCount = await sitemap.getAssistantPageCount();
      expect(pageCount).toBe(3); // 250 items / 100 per page = ceil(2.5) = 3 pages
    });

    it('should return correct mcp page count', async () => {
      vi.spyOn(sitemap['discoverService'], 'getMcpIdentifiers').mockResolvedValue(
        // @ts-ignore
        Array.from({ length: 50 }, (_, i) => ({ identifier: `mcp-${i}` })),
      );

      const pageCount = await sitemap.getMcpPageCount();
      expect(pageCount).toBe(1); // 50 items / 100 per page = 1 page
    });

    it('should return correct model page count', async () => {
      vi.spyOn(sitemap['discoverService'], 'getModelIdentifiers').mockResolvedValue(
        // @ts-ignore
        Array.from({ length: 120 }, (_, i) => ({ identifier: `model-${i}` })),
      );

      const pageCount = await sitemap.getModelPageCount();
      expect(pageCount).toBe(2); // 120 items / 100 per page = ceil(1.2) = 2 pages
    });
  });

  describe('getRobots', () => {
    it('should return correct robots.txt entries', () => {
      const robots = sitemap.getRobots();
      expect(robots).toContain(getCanonicalUrl('/sitemap-index.xml'));
      [SitemapType.Pages, SitemapType.Providers].forEach((type) => {
        expect(robots).toContain(getCanonicalUrl(`/sitemap/${type}.xml`));
      });
    });
  });
});
