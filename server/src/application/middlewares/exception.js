function exception(error, request, response, next) {
    console.error(error);
    const statusCode = error.status || 500;
    return response.status(statusCode).json({ error: error.message });
}

module.exports = { exception };
