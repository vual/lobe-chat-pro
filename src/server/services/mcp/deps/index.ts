import { mcpSystemDepsCheckService } from './MCPSystemDepsCheckService';
import { ManualInstallationChecker } from './checkers/ManualInstallationChecker';
import { NpmInstallationChecker } from './checkers/NpmInstallationChecker';
import { PythonInstallationChecker } from './checkers/PythonInstallationChecker';

// Register all checkers
mcpSystemDepsCheckService.registerChecker('npm', new NpmInstallationChecker());
mcpSystemDepsCheckService.registerChecker('python', new PythonInstallationChecker());
mcpSystemDepsCheckService.registerChecker('manual', new ManualInstallationChecker());

// Export service instance

export { mcpSystemDepsCheckService } from './MCPSystemDepsCheckService';
export * from './types';
