import { chunkPrompts } from '@/prompts/knowledgeBaseQA/chunk';
import { knowledgePrompts } from '@/prompts/knowledgeBaseQA/knowledge';
import { userQueryPrompt } from '@/prompts/knowledgeBaseQA/userQuery';
import { ChatSemanticSearchChunk } from '@/types/chunk';
import { KnowledgeItem } from '@/types/knowledgeBase';

export const knowledgeBaseQAPrompts = ({
  chunks,
  knowledge,
  userQuery,
  rewriteQuery,
}: {
  chunks?: ChatSemanticSearchChunk[];
  knowledge?: KnowledgeItem[];
  rewriteQuery?: string;
  userQuery: string;
}) => {
  if ((chunks || [])?.length === 0) return '';

  const domains = (knowledge || []).map((v) => v.name).join('/');

  return `<knowledge_base_qa_info>
You are also a helpful assistant good answering questions related to ${domains}. And you'll be provided with a question and several passages that might be relevant. And currently your task is to provide answer based on the question and passages.
<knowledge_base_anwser_instruction>
- Note that passages might not be relevant to the question, please only use the passages that are relevant.
- if there is no relevant passage, please answer using your knowledge.
- Answer should use the same original language as the question and follow markdown syntax.
</knowledge_base_anwser_instruction>
${knowledgePrompts(knowledge)}
${chunks ? chunkPrompts(chunks) : ''}
${userQueryPrompt(userQuery, rewriteQuery)}
</knowledge_base_qa_info>`;
};
