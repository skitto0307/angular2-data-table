/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../src/components/body/body-cell.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '../../../node_modules/@angular/common/src/directives/ng_template_outlet.ngfactory';
import * as import16 from '@angular/common/src/directives/ng_template_outlet';
export class Wrapper_DataTableBodyCellComponent {
  context:import0.DataTableBodyCellComponent;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.DataTableBodyCellComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
  }
  check_row(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.row = currValue;
      this._expr_0 = currValue;
    }
  }
  check_column(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.column = currValue;
      this._expr_1 = currValue;
    }
  }
  check_rowHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this.changed = true;
      this.context.rowHeight = currValue;
      this._expr_2 = currValue;
    }
  }
  check_sorts(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this.changed = true;
      this.context.sorts = currValue;
      this._expr_3 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_4:any = this.context.isFocused;
    if (import2.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      view.renderer.setElementClass(el,'active',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.isSortActive;
    if (import2.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      view.renderer.setElementClass(el,'sort-active',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.isSortAscending;
    if (import2.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      view.renderer.setElementClass(el,'sort-asc',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.isSortDescending;
    if (import2.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      view.renderer.setElementClass(el,'sort-desc',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.width;
    if (import2.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      view.renderer.setElementStyle(el,'width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_8) == (null as any))? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_8).toString() + 'px')));
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.height;
    if (import2.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      view.renderer.setElementStyle(el,'height',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9) == (null as any))? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9).toString()));
      this._expr_9 = currVal_9;
    }
  }
}
var renderType_DataTableBodyCellComponent_Host:import5.RenderComponentType = (null as any);
class _View_DataTableBodyCellComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _DataTableBodyCellComponent_0_4:Wrapper_DataTableBodyCellComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyCellComponent_Host0,renderType_DataTableBodyCellComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'datatable-body-cell',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DataTableBodyCellComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataTableBodyCellComponent_0_4 = new Wrapper_DataTableBodyCellComponent(new import9.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._DataTableBodyCellComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._DataTableBodyCellComponent_0_4.context,this.projectableNodes,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'dblclick',this.eventHandler(this._handle_dblclick_0_3.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_0,'keydown',this.eventHandler(this._handle_keydown_0_4.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableBodyCellComponent) && (0 === requestNodeIndex))) { return this._DataTableBodyCellComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._DataTableBodyCellComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    this._DataTableBodyCellComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_focus_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onFocus($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_blur_0_1($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onBlur($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_click_0_2($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onClick($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_dblclick_0_3($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onDblClick($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_keydown_0_4($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DataTableBodyCellComponent_0_4.context.onKeyDown($event)) !== false);
    return (true && pd_0_0);
  }
}
function viewFactory_DataTableBodyCellComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  if ((renderType_DataTableBodyCellComponent_Host === (null as any))) { (renderType_DataTableBodyCellComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_DataTableBodyCellComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DataTableBodyCellComponentNgFactory:import11.ComponentFactory<import0.DataTableBodyCellComponent> = new import11.ComponentFactory<import0.DataTableBodyCellComponent>('datatable-body-cell',viewFactory_DataTableBodyCellComponent_Host0,import0.DataTableBodyCellComponent);
const styles_DataTableBodyCellComponent:any[] = ([] as any[]);
var renderType_DataTableBodyCellComponent:import5.RenderComponentType = (null as any);
class _View_DataTableBodyCellComponent0 extends import3.AppView<import0.DataTableBodyCellComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import6.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import12.Wrapper_NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import6.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import12.Wrapper_NgIf;
  _text_6:any;
  _text_7:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyCellComponent0,renderType_DataTableBodyCellComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import6.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import2.createRenderElement(this.renderer,parentRenderNode,'div',new import2.InlineArray2(2,'class','datatable-body-cell-label'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import6.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import13.TemplateRef_(this._appEl_3,viewFactory_DataTableBodyCellComponent1);
    this._NgIf_3_6 = new import12.Wrapper_NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_5 = new import6.AppElement(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import13.TemplateRef_(this._appEl_5,viewFactory_DataTableBodyCellComponent2);
    this._NgIf_5_6 = new import12.Wrapper_NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import14.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import13.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import14.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:boolean = !this.context.column.cellTemplate;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.detectChangesInInputProps(this,this._anchor_3,throwOnChange);
    const currVal_5_0_0:any = this.context.column.cellTemplate;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.detectChangesInInputProps(this,this._anchor_5,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_DataTableBodyCellComponent0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<import0.DataTableBodyCellComponent> {
  if ((renderType_DataTableBodyCellComponent === (null as any))) { (renderType_DataTableBodyCellComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_DataTableBodyCellComponent,{})); }
  return new _View_DataTableBodyCellComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyCellComponent1 extends import3.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyCellComponent1,renderType_DataTableBodyCellComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'span',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this.parent.context.value;
    if (import2.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import4.SecurityContext.HTML,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DataTableBodyCellComponent1(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  return new _View_DataTableBodyCellComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyCellComponent2 extends import3.AppView<any> {
  _anchor_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _TemplateRef_0_5:any;
  _NgTemplateOutlet_0_6:import15.Wrapper_NgTemplateOutlet;
  _map_4:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyCellComponent2,renderType_DataTableBodyCellComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._map_4 = import2.pureProxy3((p0:any,p1:any,p2:any):{[key: string]:any} => {
      return {
        value: p0,
        row: p1,
        column: p2
      }
      ;
    });
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._anchor_0 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import13.TemplateRef_(this._appEl_0,viewFactory_DataTableBodyCellComponent3);
    this._NgTemplateOutlet_0_6 = new import15.Wrapper_NgTemplateOutlet(this._appEl_0.vcRef);
    this.init(([] as any[]).concat([this._appEl_0]),[this._anchor_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import16.NgTemplateOutlet) && (0 === requestNodeIndex))) { return this._NgTemplateOutlet_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_4(this.parent.context.value,this.parent.context.row,this.parent.context.column);
    this._NgTemplateOutlet_0_6.check_ngOutletContext(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parent.context.column.cellTemplate;
    this._NgTemplateOutlet_0_6.check_ngTemplateOutlet(currVal_0_0_1,throwOnChange,false);
    this._NgTemplateOutlet_0_6.detectChangesInInputProps(this,this._anchor_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DataTableBodyCellComponent2(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  return new _View_DataTableBodyCellComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyCellComponent3 extends import3.AppView<any> {
  _text_0:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableBodyCellComponent3,renderType_DataTableBodyCellComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.init(([] as any[]).concat([this._text_0]),[this._text_0],([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_DataTableBodyCellComponent3(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  return new _View_DataTableBodyCellComponent3(viewUtils,parentInjector,declarationEl);
}