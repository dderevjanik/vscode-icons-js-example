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
    return (
      <div>
        <h2>vscode-icons-js example</h2>
        <div>Please, edit inputs to see different icons</div>
        <div style={{ padding: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="row">
              Filename: <input type="text" onChange={e => this.setState({ file: e.target.value })} value={state.file} />
              <img src={'./icons/' + getIconForFile(state.file)} alt="file" width="24" />
            </div>
            <div className="row">
              Folder:{' '}
              <input type="text" onChange={e => this.setState({ folder: e.target.value })} value={state.folder} />
              <img src={'./icons/' + getIconForFolder(state.folder)} alt="folder" width="24" />
            </div>
            <div className="row">
              Opened Folder:{' '}
              <input type="text" onChange={e => this.setState({ ofolder: e.target.value })} value={state.ofolder} />
              <img src={'./icons/' + getIconForOpenFolder(state.ofolder)} alt="opened folder" width="24" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
