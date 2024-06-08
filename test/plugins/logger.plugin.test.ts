import { log } from 'console'
import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin'

describe('plugins/loggerPlugin.ts', () => {
  test('buildLogger should return function logger', () => {
    const logger = buildLogger('test')
    expect(logger).toBeDefined()
    expect(logger.log).toBeDefined()
    expect(logger.error).toBeDefined()
  })

  test('logger.log should log a message', () => {
    //mock
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log')
    const message = 'test message'
    const service = 'test service'
    // use plugin
    const logger = buildLogger(service)
    logger.log(message)

    //review lock mock
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service
      })
    )
  })
  test('logger.error should log a message', () => {
    //mock
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'error')
    const message = 'test message'
    const service = 'test service'
    // use plugin
    const logger = buildLogger(service)
    logger.error(message)

    //review lock mock
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'error',
      expect.objectContaining({
        message,
        service
      })
    )
  })
})
