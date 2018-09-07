import React from 'react';
import { Field } from 'redux-form';
import { Row, Col } from 'react-bootstrap';
import { Input, Radio, Select } from '../../components';
import Header from '../../components/header/App';
import steps from '../../mockApiResponce/mockConfigData';
import './style/formComponent.css';

const stringToComponentMapper = {
    input: Input,
    radio: Radio,
    select: Select
  };

const FormFields = () => {
    //let s= steps.fields;
    let field=steps.fields.map(f => (
        <Col xs={6} md={6} key={f.name}>
            <Field
            name={f.name}
            type={f.type || undefined}
            options={f.options || undefined}
            component={stringToComponentMapper[f.component]}
            label={f.caption}
            placeholder={f.initialValue}
            />
        </Col>
        ));
    return field;
};
  const FormSubFields = () => {
    //let s= steps.fields;
    let subfield=steps.subSectionFields.map(f => (
          <Col xs={6} md={6} key={f.name}>
            <Field
              name={f.name}
              type={f.type || undefined}
              options={f.options || undefined}
              component={stringToComponentMapper[f.component]}
              label={f.caption}
              placeholder={f.initialValue}
            />
          </Col>
        ));
    return subfield;
};
class FormComponent extends React.Component{
     constructor(props) {
         super(props);
        this.formFields= FormFields();
        this.formSubField=FormSubFields();
        this.state={
            moreInfo: false
        };
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle () {
        this.setState({
            moreInfo: !this.state.moreInfo
        });
    };
      render(){
        return (
            <React.Fragment>
            <div className="col-md-12">
            <Header/>
              <form className="col-md-8 col-md-offset-2 formStyle" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                 <div>
                  <div key={`section_${steps.name}`}>
                    <h3 className="formCaption">{steps.caption}</h3>
                      <Row>
                        {this.formFields}
                      </Row>
                    <div>
                        <label htmlFor="moreInfo">Current Address Different than Aadhaar</label><br/>
                        <Field
                        name="moreInfo"
                        id="moreInfo"
                        component="input"
                        type="checkbox"
                        onChange={this.handleToggle}
                        />
                    </div>
                    {this.state.moreInfo &&
                            <Row>
                            {this.formSubField}
                            </Row>
                    }
                  </div>
                </div>
                <button className="btn btn-primary" style={{marginRight:'10px'}} type="submit" disabled={this.props.submitting}>Submit</button>
                <button className="btn btn-warning" type="reset" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Reset</button>                
              </form>
            </div></React.Fragment>
          );
      };
};
export default FormComponent;