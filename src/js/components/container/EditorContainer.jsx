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
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';


import Input from "../presentational/Input.jsx";

$('[data-component=richtext-field]').froalaEditor();

class EditorContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "",
      model: 'Example text',
    };
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.convertToImage = this.convertToImage.bind(this);
  }

  convertToImage() {
    fetch('/api/image', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
          text: this.state.model,
      })
  })
    .then(function(response) {
      return response.json()
    })
    .then(function(imageData) {
      const iframe = '<iframe src="' + imageData.data + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
      const newWindow = window.open();
      newWindow.document.open();
      newWindow.document.write(iframe);
      newWindow.document.close();
    })
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleModelChange(model) {
    this.setState({
      model: model
    });
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
        <button onClick={this.convertToImage}>Convert</button>

        <FroalaEditor
          tag='textarea'
          className='editor-height'
          config={this.config}
          model={this.state.model}
          onModelChange={this.handleModelChange}
            />
      <div>
        <FroalaEditorImg
          config={this.config}
            />
      </div>
      </div>
    );
  }
}

export default EditorContainer;
