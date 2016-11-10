const returnPasswordHeaderIfPassword = (password, otherHeaders = {}) =>
    typeof password === "string" && password ? {'X-HA-access': password, ...otherHeaders}:{...otherHeaders};

export {returnPasswordHeaderIfPassword}