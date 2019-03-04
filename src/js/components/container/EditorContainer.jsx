import React, { Component } from "react";
import * as $ from 'jquery';
import './style.css';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';


import Input from "../presentational/Input.jsx";

$('[data-component=richtext-field]').froalaEditor();

class EditorContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "",
      model: 'Example text',
      config: {
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <div>
        <form id="article-form">
          <Input
            text="Title:"
            label="seo_title"
            type="text"
            id="seo_title"
            value={seo_title}
            handleChange={this.handleChange}
          />
        </form>

        <FroalaEditor
          tag='textarea'
          className='editor-height'
          config={this.config}
          model={this.state.model}
          onModelChange={this.handleModelChange}
            />
      </div>
    );
  }
}

export default EditorContainer;
