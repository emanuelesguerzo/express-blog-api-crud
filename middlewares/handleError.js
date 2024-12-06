const handleError = (err, req, res, next) => {
    res.statusCode = 500;
    res.json({
        error: true,
        message: "Errore interno del server. Riprova piu' tardi"
    });
};

// Exports
module.exports = handleError;
