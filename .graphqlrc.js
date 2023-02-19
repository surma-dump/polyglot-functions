const fs = require('node:fs');

function getConfig() {
    const config = {
        projects: {}
    }

    const extensions = fs.readdirSync('extensions');
    for (const entry of extensions) {
        const extensionPath = `./extensions/${entry}`;
        const schema = `${extensionPath}/schema.graphql`;
        if(!fs.existsSync(schema)) {
            continue;
        }
        config.projects[entry] = {
            schema,
            documents: `${extensionPath}/input.graphql`
        }
    }
    
    return config;
}

module.exports = getConfig();