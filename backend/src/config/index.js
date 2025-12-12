const config = {
    src: {
        port: process.env.PORT || 3000
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/orbit"
    }
};

export default config;