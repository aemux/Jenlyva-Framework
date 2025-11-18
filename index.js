// index.js
const ModuleLoader = require("./core/loader/moduleLoader");
const Environment = require("./runtime/environment");
const JenlyvaAPI = require("./sdk/api");

class Jenlyva {
    constructor(config = {}) {
        this.config = config;
        this.environment = new Environment(config);
        this.modules = new ModuleLoader(config.modulesPath || "./modules");
        this.api = new JenlyvaAPI(this);
    }

    async init() {
        console.log("[Jenlyva] Inicializando...");
        await this.modules.loadAll();
        console.log("[Jenlyva] Framework listo.");
    }
}

module.exports = Jenlyva;