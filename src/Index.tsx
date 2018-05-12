import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getIconForFile, getIconForFolder, getIconForOpenFolder } from 'vscode-icons-js';

class App extends React.Component<{}, { file: string; folder: string; ofolder: string }> {
  state = {
    file: 'main.cpp',
    ofolder: 'src',
    folder: 'docs'
  };

  render() {
    const { state, setState } = this;
    const iconFileName = getIconForFile(state.file);
    const iconFolderName = getIconForFolder(state.folder);
    const iconOpenFolderName = getIconForOpenFolder(state.ofolder);
    return (
      <div>
        <h2>vscode-icons-js example</h2>
        <div>Please, edit inputs to see different icons</div>
        <div style={{ padding: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="row">
              getIconForFile(<input type="text" onChange={e => this.setState({ file: e.target.value })} value={state.file} />) => <img src={'./icons/' + iconFileName} alt="file" width="24" /> <i>{iconFileName}</i>
            </div>
            <div className="row">
              getIconForFolder(<input type="text" onChange={e => this.setState({ folder: e.target.value })} value={state.folder} />) => <img src={'./icons/' + iconFolderName} alt="folder" width="24" /> <i>{iconFolderName}</i>
            </div>
            <div className="row">
              getIconForOpenFolder(<input type="text" onChange={e => this.setState({ ofolder: e.target.value })} value={state.ofolder} />) => <img src={'./icons/' + iconOpenFolderName} alt="opened folder" width="24" /> <i>{iconOpenFolderName}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
