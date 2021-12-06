import { mutations as loggerMutations } from './logger'

export const resolvers = {
  Mutation: {
    ...loggerMutations,
  },
}
