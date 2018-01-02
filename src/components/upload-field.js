import React from 'react';
import {Field, reduxForm} from 'redux-form';

const UploadFieldComp = (parseFile) => {
  return (
    <form>
      <div>
        <label>Upload BOM</label>
        <div>
          <Field name="uploadBom" component="input" type="file" placeholder="Upload BOM"/>
        </div>
      </div>
    </form>
  );
};

export const UploadField = reduxForm({form: 'uploadField'})(UploadFieldComp);
