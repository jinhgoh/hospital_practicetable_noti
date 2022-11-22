function sendSlack_range(e) {
  const log = e.range.getSheet()
  const cellvalue = SpreadsheetApp.getActiveRange().getValue()
  const slackUrl = "https://hooks.slack.com/{ID_KEY}"
  const params = {
    method : "post",
    contentType: "application/json",
    payload: JSON.stringify({
      "text": "---------------------------------------------------------" + "\n" + " <- "+ cellvalue + "\n 추가날짜: " + new Date()
    })
  };
  if (cellvalue.includes('고진형') || cellvalue.includes("{MY_PATIENT_IDs}") || (cellvalue.includes("Jason") && cellvalue.includes("CT")) || (cellvalue.includes("Peter") && cellvalue.includes("MRI"))) {
    const sendMsg = UrlFetchApp.fetch(slackUrl, params)
    const respCode = sendMsg.getResponseCode()
    Logger.log(sendMsg)
    Logger.log(respCode)
  }
}
