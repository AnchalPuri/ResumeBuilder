var sidebarForm;
var textarea;
window.onload = function() {
  sidebarForm = document.getElementById('my_form');
  textarea = document.getElementById("txtarea");
}
var Basics_info = new Object();

function jsonObject(sidebarForm) {
  var data = new Object();
  var fieldsets = document.getElementsByTagName("fieldset");
  for (var index = 0; index < fieldsets.length; ++index) {
    var fieldset = fieldsets[index];
    var elements = fieldset.elements;
    for (var i = 0; i < elements.length; ++i) {
      var element = elements[i];
      var key = element.name;
      var val = element.value;
      data[key] = val;
    }
    Basics_info[fieldset.name] = data;
    data = {};
  }
  var jsondata = JSON.stringify(Basics_info, null, "\t");
  return jsondata;
};

function setJsonInBox() {
  var data = jsonObject(sidebarForm);
  if (textarea.value !== data) textarea.value = data;
}

function showjson() {
  document.getElementById("txtarea").style.display = "block";
}

function hidejson() {
  document.getElementById("txtarea").style.display = "none";
}

function setHtml() {
  var data = textarea.value;
  if (data) {
    var obj = JSON.parse(data);
    if (obj) {
      for (var key in obj.basics) {
        if (key === "name") {
          document.getElementById("h1").innerHTML = obj.basics.name;
        } else if (key === "label") {
          document.getElementById("h2").innerHTML = obj.basics.label;
        } else {
          var element = document.getElementsByClassName(key)[0];
          if (element) {
            element.innerHTML = obj.basics[key];
          }
        }
      }
      
      for (var key in obj.profile) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.profile[key];
        }
      }
      for (var key in obj.work) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.work[key];
        }
      }
      for (var key in obj.volunteer) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.volunteer[key];
        }
      }
      for (var key in obj.education) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.education[key];
        }
      }
      for (var key in obj.awards) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.awards[key];
        }
      }
      for (var key in obj.publications) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.publications[key];
        }
      }
      for (var key in obj.skills) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.skills[key];
        }
      }
      for (var key in obj.interests) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.interests[key];
        }
      }
      for (var key in obj.languages) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.languages[key];
        }
      }
      for (var key in obj.references) {
        var element = document.getElementsByClassName(key)[0];
        if (element) {
          element.innerHTML = obj.references[key];
        }
      }
    }
  }
};

function updateForm() {
  var data = textarea.value;
  if (data) {
    var obj = JSON.parse(data);
    if (obj) {
      for (var key in obj.basics) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.basics[key];
      }
      for (var key in obj.profile) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.profile[key];
      }
      for (var key in obj.work) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.work[key];
      }
      for (var key in obj.volunteer) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.volunteer[key];
      }
      for (var key in obj.education) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.education[key];
      }
      for (var key in obj.awards) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.awards[key];
      }
      for (var key in obj.publications) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.publications[key];
      }
      for (var key in obj.skills) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.skills[key];
      }
      for (var key in obj.interests) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.interests[key];
      }
      for (var key in obj.languages) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.languages[key];
      }
      for (var key in obj.references) {
        var x = sidebarForm.querySelector('input[name="' + key + '"]');
        x.value = obj.references[key];
      }
    }
  }
};

function printResume(){
    
    window.print();
}