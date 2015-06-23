# LoomSort
Sorting and Filtering Javascript Library

See index.html + main.js for example.

Includes two wrappers - a generic container wrapper and a table wrapper.

Can either create with html data attributes or config passed into the constructor. 

Data attributes are:
* data-field = The field name. eg Name
* data-type = Type of the field eg number,string,date
* data-format - For data-type="date", format of date eg dd/mm/yyyy

Config can be used to create own getValue functions - for example to extract text in a html element
```javascript
{
  fields:{
    link:{
      getValue:function($el){
        return $el.find('span').text();
      }
    }
  }
}
```

Config can also be used to specify types or filter functions
```javascript
{
  fields{
    isEmployee:{
      filter:function($el,value){
        return value == $el.find('input').is('checked');
      }
    },
    price:{
      type:number
    }
  }
}
```
