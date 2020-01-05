import React from 'react';
import Tag from './Tag';

function Elements() {
  return (
    <div className="container">
      <h2 className="h2">Elements</h2>
      <div className="divider"></div>
      <div className="elements">
        <div className="elements__wrapper">
          <h1 className="h1">Heading 1 - h1</h1>
          <h2 className="h2">Heading 2 - h2</h2>
          <h3 className="h3">Heading 3 - h3</h3>
          <h4 className="h4">Heading 4 - h4</h4>
          <div className="divider"></div>
          <p>text</p>
          <p className="small-text">small-text</p>
        </div>
        <div className="elements__wrapper">
          <h4 className="h4">.btn.btn-primary</h4>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-primary btn-small">Button Small</button>
          <h4 className="h4">.btn.btn-inverse</h4>
          <button className="btn btn-inverse">Button</button>
          <button className="btn btn-inverse btn-small">Button Small</button>
          <h4 className="h4">Tags</h4>
          <Tag title="Tag name" />
          <Tag title="Tag name" removing="true" />

          <div className="divider"></div>

          <h4 className="h4">Inputs</h4>

          <div className="input__wrapper">
            <input type="text" placeholder="input text" className="input-text" />
          </div>

          <div className="input__wrapper">
            <label className="checkbox">
              <input type="checkbox" className="checkbox__input" />
              <span className="checkbox__mark"></span>
              Checkbox
            </label>
          </div>

          <div className="input__wrapper">
            <label className="checkbox">
              <input type="radio" className="checkbox__input" name="radio" value={0} />
              <span className="radio__mark"></span>
              Radio value
            </label>
          </div>

          <div className="input__wrapper">
            <label className="checkbox">
              <input type="radio" className="checkbox__input" name="radio" value={1} />
              <span className="radio__mark"></span>
              Radio value
            </label>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Elements;
