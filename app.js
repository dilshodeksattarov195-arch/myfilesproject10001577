const metricsVarseConfig = { serverId: 1320, active: true };

const metricsVarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1320() {
    return metricsVarseConfig.active ? "OK" : "ERR";
}

console.log("Module metricsVarse loaded successfully.");