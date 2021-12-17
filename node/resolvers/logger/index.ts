import { LogLevel } from '@vtex/api'

export const mutations = {
  logger: async (
    _: unknown,
    { app, message, detail }: MutationParamLogger,
    ctx: Context
  ) => {
    try {
      ctx.vtex.logger.log(
        {
          app,
          message,
          detail: JSON.parse(detail),
        },
        LogLevel.Info
      )

      return { status: 200 }
    } catch (_e) {
      return { status: 400 }
    }
  },
}
