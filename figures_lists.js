function onOpen() {
  DocumentApp.getUi()
  .createMenu('Advanced')
  .addItem('Figures Setting', 'FigSet')
  .addToUi();
 }




function FigSet(){
  var selection = DocumentApp.getActiveDocument().getSelection();
  var tarDoc = DocumentApp.openById('insert file id')
  var tarDocBody = tarDoc.getBody();
  var output;
  if(selection){
  var el = selection.getRangeElements();
    for(var x=0;x<el.length;x++){
      if(el[x].getElement().editAsText){
        var holder = el[x].getElement().editAsText();
        output += holder.getText();
        if(el[x].isPartial()){
          holder.setItalic(el[x].getStartOffset(),el[x].getEndOffsetInclusive(),true);
        }else{
          holder.setItalic(true);
        }
      }
    }
  tarDocBody.appendParagraph(output);
  }
} 