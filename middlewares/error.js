class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super(message); // Call the super constructor first to initialize parent constructor
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  const STATUS_CODE = err.statusCode || 500;
  const ERROR_MESSAGE = err.message || "Internal Server Error";
  return res.status(STATUS_CODE).json({
    success: false,
    msg: ERROR_MESSAGE,
  });
};

export default ErrorHandler;
