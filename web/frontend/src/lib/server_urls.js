import entries from 'lodash/entries'
import map from 'lodash/map'

export default {

  // APIs
  publicTimelapse: () => '/api/v1/publictimelapse/',
  printShotFeedback: (shotId, printId) => `/api/v1/printshotfeedbacks/${shotId}/?print_id=${printId}`,
  print: printId => `/api/v1/prints/${printId}/`,
  prints: () => '/api/v1/prints/',
  printsBulkDelete: () => '/api/v1/prints/bulk_delete/',
  printAlertOverwrite: printId => `/api/v1/prints/${printId}/alert_overwrite/`,
  printers: () => '/api/v1/printers/',
  printer: printerId => `/api/v1/printers/${printerId}/`,
  printerAction: (printerId, path) => `/api/v1/printers/${printerId}${path}`,
  pubPrinter: () => '/api/v1p/printer/',
  gcodes: () => '/api/v1/gcodes/',
  tunnelUsage: () => '/api/v1/tunnelusage/',
  verificationCode: () => '/api/v1/onetimeverificationcodes/',
  user: () => '/api/v1/users/me/',
  sharedResources: (paramsObj) => '/api/v1/sharedresources/?'
        + map(entries(paramsObj), (entry) => entry.join('=')).join('&'),
  sharedResource: (resourceId) => `/api/v1/sharedresources/${resourceId}/`,

  // App urls
  printerControl: printerId => `/printers/${printerId}/control/`,
  printerWebSocket: printerId => `/ws/web/${printerId}/`,
  printerSharedWebSocket: token => `/ws/share_token/web/${token}/`,
  printerWizard: printerId => `/printers/wizard/?printerId=${printerId}`
}
