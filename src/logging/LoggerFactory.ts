import { RedStoneLogger, LogLevel } from '@smartweave';
import { ConsoleLoggerFactory } from './web/ConsoleLoggerFactory';
import { TsLogFactory } from './node/TsLogFactory';
import { ISettingsParam } from 'tslog';

export class LoggerFactory {
  static readonly INST: LoggerFactory = typeof window === 'undefined' ? new TsLogFactory() : new ConsoleLoggerFactory();

  private constructor() {
    // not instantiable from outside
  }

  setOptions(newOptions: ISettingsParam, moduleName: string): void {
    LoggerFactory.INST.setOptions(newOptions, moduleName);
  }

  getOptions(moduleName?: string): ISettingsParam {
    return LoggerFactory.INST.getOptions(moduleName);
  }

  logLevel(level: LogLevel, moduleName?: string) {
    LoggerFactory.INST.logLevel(level, moduleName);
  }

  create(moduleName?: string): RedStoneLogger {
    return LoggerFactory.INST.create(moduleName);
  }
}
