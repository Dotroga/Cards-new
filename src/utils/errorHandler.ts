export type ErrorData = {
  data: {
    message: string
    path: string
    statusCode: string
    timestamp: string
  }
  status: string
}

export const errorHandler = (error: ErrorData) => {
  if (error.status === 'FETCH_ERROR') {
    return 'Internet connection error'
  } else if (error.data) {
    return error.data.message
  }
}
