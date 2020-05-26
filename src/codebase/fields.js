/**
 * validate general data
 * @param {*} data
 */
export const validateFields = (data) => {
  let pluginData = {
    ...data,
    pluginName: data.pluginName !== "" ? data.pluginName : "wp2gen",
    baseNamespace: data.baseNamespace !== "" ? data.baseNamespace : "WP2GEN",
    pluginURI: data.pluginURI !== "" ? data.pluginURI : "https://wp2gen.com",
    description:
      data.description !== ""
        ? data.pluginURI
        : "Build awesome plugin starter with a structure.",
    version: data.version !== "" ? data.version : "0.1.0",
    author: data.author !== "" ? data.author : "Kapil Paul",
    authorURI: data.authorURI !== "" ? data.authorURI : "https://kapilpaul.me",
    authorEmail:
      data.authorEmail !== "" ? data.authorEmail : "kapil@wp2gen.com",
    license: data.license !== "" ? data.license : "GPLv2",
    licenseURI:
      data.licenseURI !== ""
        ? data.licenseURI
        : "https://www.gnu.org/licenses/gpl-2.0.html",
    textDomain: data.textDomain !== "" ? data.textDomain : "wp2gen",
    domainPath: data.domainPath !== "" ? data.domainPath : "/languages",
    mainClassName: data.mainClassName !== "" ? data.mainClassName : "WP2GEN",
    constantPrefix: data.constantPrefix !== "" ? data.constantPrefix : "WP2GEN",
    functionPrefix: data.functionPrefix !== "" ? data.functionPrefix : "wp_gen",
  };

  return pluginData;
};

/**
 * check field undefined or blank
 * @param {*} fieldName
 */
const validField = (fieldName) => {
  if (typeof fieldName === "undefined" || fieldName === "") {
    return false;
  }

  return true;
};

/**
 * validate table settings
 * @param {*} data
 */
export const validateTableSetting = (data) => {
  let settingData = {
    ...data,
    crudClassName: validField(data.crudClassName)
      ? data.crudClassName
      : "WPGEN",
    menuTitle: validField(data.menuTitle) ? data.menuTitle : "wp2gen",
    capability: validField(data.capability)
      ? data.capability
      : "manage_options",
    fileNamePrefix: validField(data.fileNamePrefix)
      ? data.fileNamePrefix
      : "wp2gen",
    nonceKey: validField(data.nonceKey) ? data.nonceKey : "wp2gen",
    submitButtonText: validField(data.submitButtonText)
      ? data.submitButtonText
      : "Submit",
    updateButtonText: validField(data.updateButtonText)
      ? data.updateButtonText
      : "Update",
    submitName: validField(data.submitName) ? data.submitName : "submit-field",
    singularName: validField(data.singularName) ? data.singularName : "item",
    pluralName: validField(data.pluralName) ? data.pluralName : "items",
    noItemFoundText: validField(data.noItemFoundText)
      ? data.noItemFoundText
      : "Not found any item",
    perPage: validField(data.perPage) ? data.perPage : "20",
    pageSlug: validField(data.pageSlug) ? data.pageSlug : "wp2gen",
  };

  return settingData;
};
