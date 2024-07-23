import winston from "winston";

const { combine, timestamp, label, printf } = winston.format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  //* 로그 출력 형식 정의
  format: combine(
    timestamp({ format: "HH:mm:ss" }),
    label({ label: "Coplound" }),
    logFormat
  ),
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize()),
    })
  );
}

export default logger;
