# grunt-underscore-render

> Renders <a href="http://underscorejs.org/">underscore.js</a> templates into native JavaScript functions. Allowing you to simplify rendering templates in your single page applications. It can also help to boost performance if you choose to store the template files on the CDN.

## Getting Started
If you want to add this to your Grunt build strategy you can install it trough npm.

```shell
npm install grunt-contrib-clean --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-underscore-render');
```

#### Example target

```js
underscore_render:
options: {
  'outputFile': 'templates.js',
  'globalName': 'nameOfWindowScopedVariableObject',
  'srcFiles': [
    {
    	'src':'path/to/underscoreTemplate.html',
	    'name':'nameOfVariableReference'
	}
  ]
},
```

### Example template
```html
&lt;!--data-underscore--&gt;
&lt;h1&gt;&lt;%=hello%&gt;&lt;/h1&gt;
&lt;!--/data-underscore--&gt;
```

All between the HTML comments &lt;!--data-underscore--&gt; and &lt;!--/data-underscore--&gt; is being used to render the underscore template.

### Example result
```js
window.nameOfWindowScopedVariableObject=window.nameOfWindowScopedVariableObject||{};window.nameOfWindowScopedVariableObject.nameOfVariableReference=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n<h1>'+
((__t=(hello))==null?'':__t)+
'</h1>\n';
}
return __p;
};
```