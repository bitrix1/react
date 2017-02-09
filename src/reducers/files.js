const initialState = [{ "dir": "Bp53063", "bp": "Bp53063", "filename": "log2.log", "filetime": 1484390043, "size": 0, "type": "LOG", "parrent": "Bp53063" }, { "dir": "Bp53022", "bp": "Bp53022", "filename": "log3.log", "filetime": 1484390083, "size": 0, "type": "LOG", "parrent": "Bp53022" }, { "dir": "Bp53023", "bp": "Bp53023", "filename": "log1.log", "filetime": 1484390116, "size": 0, "type": "LOG", "parrent": "Bp53023" }];
for (let i = 0; i < 1000; i++) {
  initialState.push({ "dir": "Bp53063", "bp": "Bp53063", "filename": "log2.log", "filetime": 1484390043, "size": 0, "type": "LOG", "parrent": "Bp53063" })
}

export default function files(state = initialState, action) {
  if (action.type === 'GET_DATA_FILES') {
    return action.payload || state
  }
  return state;
}