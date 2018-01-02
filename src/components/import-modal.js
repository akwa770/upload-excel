import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import {UploadField} from './upload-field';
// import {readExcelFile} from './read-xlsx-files';



export class ImportModal extends Component {
  state = {
    showModal: false,
  }

  render() {
    return (
        
      <div className="container">
        <Button onClick={()=>  this.setState({ showModal: true })}>Upload BOM</Button>
        <div className="modal-container" style={{ height: 200 }}>
          <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm" show={this.state.showModal}  onHide={() => this.setState({ showModal: false }) } >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Upload BOM</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UploadField />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.setState({ showModal: false }) }>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

// export const ComponentsPage = connect(null, mapDispatchToProps)(ComponentsPageComp);
    