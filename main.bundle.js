webpackJsonp([2],{

/***/ "../../../../../dist/effects/@ngrx/effects.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_ignoreElements__ = __webpack_require__("../../../../rxjs/operator/ignoreElements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_ignoreElements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_ignoreElements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_materialize__ = __webpack_require__("../../../../rxjs/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_filter__ = __webpack_require__("../../../../rxjs/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_groupBy__ = __webpack_require__("../../../../rxjs/operator/groupBy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_groupBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_groupBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__ = __webpack_require__("../../../../rxjs/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_exhaustMap__ = __webpack_require__("../../../../rxjs/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_exhaustMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_exhaustMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_dematerialize__ = __webpack_require__("../../../../rxjs/operator/dematerialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_dematerialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_operator_dematerialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Effect; });
/* unused harmony export mergeEffects */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EffectsModule; });
/* unused harmony export EffectSources */
/* unused harmony export toPayload */
/* unused harmony export ɵc */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵg */
/* unused harmony export ɵi */
/* unused harmony export ɵh */
/* unused harmony export ɵf */
/* unused harmony export ɵe */
/* unused harmony export ɵd */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();













var METADATA_KEY = '__@ngrx/effects__';
/**
 * @param {?} sourceProto
 * @return {?}
 */
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor[METADATA_KEY] || [];
}
/**
 * @param {?} sourceProto
 * @param {?} entries
 * @return {?}
 */
function setEffectMetadataEntries(sourceProto, entries) {
    var /** @type {?} */ constructor = sourceProto.constructor;
    var /** @type {?} */ meta = constructor.hasOwnProperty(METADATA_KEY)
        ? ((constructor))[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
/**
 * \@ExportDecoratedItems
 * @param {?=} __0
 * @return {?}
 */
function Effect(_a) {
    var dispatch = (_a === void 0 ? { dispatch: true } : _a).dispatch;
    return function (target, propertyName) {
        var /** @type {?} */ metadata = { propertyName: propertyName, dispatch: dispatch };
        setEffectMetadataEntries(target, [metadata]);
    };
}
/**
 * @param {?} instance
 * @return {?}
 */
function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
var getSourceMetadata = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* compose */])(getEffectMetadataEntries, getSourceForInstance);
var onRunEffectsKey = 'ngrxOnRunEffects';
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function isOnRunEffects(sourceInstance) {
    var /** @type {?} */ source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function mergeEffects(sourceInstance) {
    var /** @type {?} */ sourceName = getSourceForInstance(sourceInstance).constructor.name;
    var /** @type {?} */ observables = getSourceMetadata(sourceInstance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch;
        var /** @type {?} */ observable = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        if (dispatch === false) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_ignoreElements__["ignoreElements"].call(observable);
        }
        var /** @type {?} */ materialized$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_materialize__["materialize"].call(observable);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(materialized$, function (notification) { return ({
            effect: sourceInstance[propertyName],
            notification: notification,
            propertyName: propertyName,
            sourceName: sourceName,
            sourceInstance: sourceInstance,
        }); });
    });
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__["merge"].apply(void 0, observables);
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function resolveEffectSource(sourceInstance) {
    var /** @type {?} */ mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}
var Actions = (function (_super) {
    __extends(Actions, _super);
    /**
     * @param {?=} source
     */
    function Actions(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this.source = source;
        }
        return _this;
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    Actions.prototype.lift = function (operator) {
        var /** @type {?} */ observable = new Actions();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * @template V2
     * @param {...?} allowedTypes
     * @return {?}
     */
    Actions.prototype.ofType = function () {
        var allowedTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            allowedTypes[_i] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_filter__["filter"].call(this, function (action) { return allowedTypes.some(function (type) { return type === action.type; }); });
    };
    return Actions;
}(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"]));
Actions.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
Actions.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["g" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* ScannedActionsSubject */],] },] },
]; };
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
function verifyOutput(output, reporter) {
    reportErrorThrown(output, reporter);
    reportInvalidActions(output, reporter);
}
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
function reportErrorThrown(output, reporter) {
    if (output.notification.kind === 'E') {
        var /** @type {?} */ errorReason = "Effect " + getEffectName(output) + " threw an error";
        reporter.report(errorReason, {
            Source: output.sourceInstance,
            Effect: output.effect,
            Error: output.notification.error,
            Notification: output.notification,
        });
    }
}
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        var /** @type {?} */ action = output.notification.value;
        var /** @type {?} */ isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            var /** @type {?} */ errorReason = "Effect " + getEffectName(output) + " dispatched an invalid action";
            reporter.report(errorReason, {
                Source: output.sourceInstance,
                Effect: output.effect,
                Dispatched: action,
                Notification: output.notification,
            });
        }
    }
}
/**
 * @param {?} action
 * @return {?}
 */
function isAction(action) {
    return action && action.type && typeof action.type === 'string';
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEffectName(_a) {
    var propertyName = _a.propertyName, sourceInstance = _a.sourceInstance, sourceName = _a.sourceName;
    var /** @type {?} */ isMethod = typeof sourceInstance[propertyName] === 'function';
    return "\"" + sourceName + "." + propertyName + (isMethod ? '()' : '') + "\"";
}
var IMMEDIATE_EFFECTS = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["e" /* InjectionToken */]('ngrx/effects: Immediate Effects');
var ROOT_EFFECTS = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["e" /* InjectionToken */]('ngrx/effects: Root Effects');
var FEATURE_EFFECTS = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["e" /* InjectionToken */]('ngrx/effects: Feature Effects');
var CONSOLE = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["e" /* InjectionToken */]('Browser Console');
var ErrorReporter = (function () {
    /**
     * @param {?} console
     */
    function ErrorReporter(console) {
        this.console = console;
    }
    /**
     * @param {?} reason
     * @param {?} details
     * @return {?}
     */
    ErrorReporter.prototype.report = function (reason, details) {
        this.console.group(reason);
        for (var /** @type {?} */ key in details) {
            this.console.error(key + ":", details[key]);
        }
        this.console.groupEnd();
    };
    return ErrorReporter;
}());
ErrorReporter.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
ErrorReporter.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["g" /* Inject */], args: [CONSOLE,] },] },
]; };
var EffectSources = (function (_super) {
    __extends(EffectSources, _super);
    /**
     * @param {?} errorReporter
     */
    function EffectSources(errorReporter) {
        var _this = _super.call(this) || this;
        _this.errorReporter = errorReporter;
        return _this;
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    EffectSources.prototype.addEffects = function (effectSourceInstance) {
        this.next(effectSourceInstance);
    };
    /**
     * @return {?}
     */
    EffectSources.prototype.toActions = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_mergeMap__["mergeMap"].call(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_groupBy__["groupBy"].call(this, getSourceForInstance), function (source$) { return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_dematerialize__["dematerialize"].call(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_filter__["filter"].call(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_exhaustMap__["exhaustMap"].call(source$, resolveEffectSource), function (output) {
            verifyOutput(output, _this.errorReporter);
            return output.notification;
        }), function (notification) { return notification.kind === 'N'; })); });
    };
    return EffectSources;
}(__WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__["Subject"]));
EffectSources.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
EffectSources.ctorParameters = function () { return [
    { type: ErrorReporter, },
]; };
var EffectsRunner = (function () {
    /**
     * @param {?} effectSources
     * @param {?} store
     */
    function EffectsRunner(effectSources, store$$1) {
        this.effectSources = effectSources;
        this.store = store$$1;
        this.effectsSubscription = null;
    }
    /**
     * @return {?}
     */
    EffectsRunner.prototype.start = function () {
        if (!this.effectsSubscription) {
            this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store);
        }
    };
    /**
     * @return {?}
     */
    EffectsRunner.prototype.ngOnDestroy = function () {
        if (this.effectsSubscription) {
            this.effectsSubscription.unsubscribe();
            this.effectsSubscription = null;
        }
    };
    return EffectsRunner;
}());
EffectsRunner.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
EffectsRunner.ctorParameters = function () { return [
    { type: EffectSources, },
    { type: __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */], },
]; };
var EffectsRootModule = (function () {
    /**
     * @param {?} sources
     * @param {?} runner
     * @param {?} rootEffects
     * @param {?} storeModule
     */
    function EffectsRootModule(sources, runner, rootEffects, storeModule) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach(function (effectSourceInstance) { return sources.addEffects(effectSourceInstance); });
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    EffectsRootModule.prototype.addEffects = function (effectSourceInstance) {
        this.sources.addEffects(effectSourceInstance);
    };
    return EffectsRootModule;
}());
EffectsRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */], args: [{},] },
];
/**
 * @nocollapse
 */
EffectsRootModule.ctorParameters = function () { return [
    { type: EffectSources, },
    { type: EffectsRunner, },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["g" /* Inject */], args: [ROOT_EFFECTS,] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* StoreModule */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["j" /* Optional */] },] },
]; };
var EffectsFeatureModule = (function () {
    /**
     * @param {?} root
     * @param {?} effectSourceGroups
     * @param {?} storeModule
     */
    function EffectsFeatureModule(root, effectSourceGroups, storeModule) {
        this.root = root;
        effectSourceGroups.forEach(function (group) { return group.forEach(function (effectSourceInstance) { return root.addEffects(effectSourceInstance); }); });
    }
    return EffectsFeatureModule;
}());
EffectsFeatureModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */], args: [{},] },
];
/**
 * @nocollapse
 */
EffectsFeatureModule.ctorParameters = function () { return [
    { type: EffectsRootModule, },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["g" /* Inject */], args: [FEATURE_EFFECTS,] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* StoreModule */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["j" /* Optional */] },] },
]; };
var EffectsModule = (function () {
    function EffectsModule() {
    }
    /**
     * @param {?} featureEffects
     * @return {?}
     */
    EffectsModule.forFeature = function (featureEffects) {
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                featureEffects,
                {
                    provide: FEATURE_EFFECTS,
                    multi: true,
                    deps: featureEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    };
    /**
     * @param {?} rootEffects
     * @return {?}
     */
    EffectsModule.forRoot = function (rootEffects) {
        return {
            ngModule: EffectsRootModule,
            providers: [
                EffectsRunner,
                EffectSources,
                ErrorReporter,
                Actions,
                rootEffects,
                {
                    provide: ROOT_EFFECTS,
                    deps: rootEffects,
                    useFactory: createSourceInstances,
                },
                {
                    provide: CONSOLE,
                    useFactory: getConsole,
                },
            ],
        };
    };
    return EffectsModule;
}());
EffectsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */], args: [{},] },
];
/**
 * @nocollapse
 */
EffectsModule.ctorParameters = function () { return []; };
/**
 * @param {...?} instances
 * @return {?}
 */
function createSourceInstances() {
    var instances = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        instances[_i] = arguments[_i];
    }
    return instances;
}
/**
 * @return {?}
 */
function getConsole() {
    return console;
}
/**
 * @deprecated Since version 4.1. Will be deleted in version 5.0.
 * @param {?} action
 * @return {?}
 */
function toPayload(action) {
    return ((action)).payload;
}
/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "../../../../../dist/router-store/@ngrx/router-store.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* unused harmony export ROUTER_ERROR */
/* unused harmony export ROUTER_CANCEL */
/* unused harmony export ROUTER_NAVIGATION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return routerReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreRouterConnectingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouterStateSerializer; });
/* unused harmony export DefaultRouterStateSerializer */




/**
 * @abstract
 */
var RouterStateSerializer = (function () {
    function RouterStateSerializer() {
    }
    /**
     * @abstract
     * @param {?} routerState
     * @return {?}
     */
    RouterStateSerializer.prototype.serialize = function (routerState) { };
    return RouterStateSerializer;
}());
var DefaultRouterStateSerializer = (function () {
    function DefaultRouterStateSerializer() {
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    DefaultRouterStateSerializer.prototype.serialize = function (routerState) {
        return routerState;
    };
    return DefaultRouterStateSerializer;
}());
/**
 * An action dispatched when the router navigates.
 */
var ROUTER_NAVIGATION = 'ROUTER_NAVIGATION';
/**
 * An action dispatched when the router cancels navigation.
 */
var ROUTER_CANCEL = 'ROUTER_CANCEL';
/**
 * An action dispatched when the router errors.
 */
var ROUTER_ERROR = 'ROUTE_ERROR';
/**
 * @template T
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function routerReducer(state, action) {
    switch (action.type) {
        case ROUTER_NAVIGATION:
        case ROUTER_ERROR:
        case ROUTER_CANCEL:
            return {
                state: action.payload.routerState,
                navigationId: action.payload.event.id,
            };
        default:
            return state;
    }
}
/**
 * Connects RouterModule with StoreModule.
 *
 * During the navigation, before any guards or resolvers run, the router will dispatch
 * a ROUTER_NAVIGATION action, which has the following signature:
 *
 * ```
 * export type RouterNavigationPayload = {
 *   routerState: RouterStateSnapshot,
 *   event: RoutesRecognized
 * }
 * ```
 *
 * Either a reducer or an effect can be invoked in response to this action.
 * If the invoked reducer throws, the navigation will be canceled.
 *
 * If navigation gets canceled because of a guard, a ROUTER_CANCEL action will be
 * dispatched. If navigation results in an error, a ROUTER_ERROR action will be dispatched.
 *
 * Both ROUTER_CANCEL and ROUTER_ERROR contain the store state before the navigation
 * which can be used to restore the consistency of the store.
 *
 * Usage:
 *
 * ```typescript
 * \@NgModule({
 *   declarations: [AppCmp, SimpleCmp],
 *   imports: [
 *     BrowserModule,
 *     StoreModule.forRoot(mapOfReducers),
 *     RouterModule.forRoot([
 *       { path: '', component: SimpleCmp },
 *       { path: 'next', component: SimpleCmp }
 *     ]),
 *     StoreRouterConnectingModule
 *   ],
 *   bootstrap: [AppCmp]
 * })
 * export class AppModule {
 * }
 * ```
 */
var StoreRouterConnectingModule = (function () {
    /**
     * @param {?} store
     * @param {?} router
     * @param {?} serializer
     */
    function StoreRouterConnectingModule(store$$1, router$$1, serializer) {
        this.store = store$$1;
        this.router = router$$1;
        this.serializer = serializer;
        this.dispatchTriggeredByRouter = false;
        this.navigationTriggeredByDispatch = false;
        this.setUpBeforePreactivationHook();
        this.setUpStoreStateListener();
        this.setUpStateRollbackEvents();
    }
    /**
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.setUpBeforePreactivationHook = function () {
        var _this = this;
        ((this.router)).hooks.beforePreactivation = function (routerState) {
            _this.routerState = _this.serializer.serialize(routerState);
            if (_this.shouldDispatchRouterNavigation())
                _this.dispatchRouterNavigation();
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(true);
        };
    };
    /**
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.setUpStoreStateListener = function () {
        var _this = this;
        this.store.subscribe(function (s) {
            _this.storeState = s;
        });
        this.store.select('routerReducer').subscribe(function () {
            _this.navigateIfNeeded();
        });
    };
    /**
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.shouldDispatchRouterNavigation = function () {
        if (!this.storeState['routerReducer'])
            return true;
        return !this.navigationTriggeredByDispatch;
    };
    /**
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.navigateIfNeeded = function () {
        if (!this.storeState['routerReducer'] ||
            !this.storeState['routerReducer'].state) {
            return;
        }
        if (this.dispatchTriggeredByRouter)
            return;
        if (this.router.url !== this.storeState['routerReducer'].state.url) {
            this.navigationTriggeredByDispatch = true;
            this.router.navigateByUrl(this.storeState['routerReducer'].state.url);
        }
    };
    /**
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.setUpStateRollbackEvents = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RoutesRecognized */]) {
                _this.lastRoutesRecognized = e;
            }
            else if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationCancel */]) {
                _this.dispatchRouterCancel(e);
            }
            else if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* NavigationError */]) {
                _this.dispatchRouterError(e);
            }
        });
    };
    /**
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.dispatchRouterNavigation = function () {
        this.dispatchRouterAction(ROUTER_NAVIGATION, {
            routerState: this.routerState,
            event: new __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RoutesRecognized */](this.lastRoutesRecognized.id, this.lastRoutesRecognized.url, this.lastRoutesRecognized.urlAfterRedirects, this.routerState),
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.dispatchRouterCancel = function (event) {
        this.dispatchRouterAction(ROUTER_CANCEL, {
            routerState: this.routerState,
            storeState: this.storeState,
            event: event,
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.dispatchRouterError = function (event) {
        this.dispatchRouterAction(ROUTER_ERROR, {
            routerState: this.routerState,
            storeState: this.storeState,
            event: new __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* NavigationError */](event.id, event.url, "" + event),
        });
    };
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    StoreRouterConnectingModule.prototype.dispatchRouterAction = function (type, payload) {
        this.dispatchTriggeredByRouter = true;
        try {
            this.store.dispatch({ type: type, payload: payload });
        }
        finally {
            this.dispatchTriggeredByRouter = false;
            this.navigationTriggeredByDispatch = false;
        }
    };
    return StoreRouterConnectingModule;
}());
StoreRouterConnectingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                providers: [
                    { provide: RouterStateSerializer, useClass: DefaultRouterStateSerializer },
                ],
            },] },
];
/**
 * @nocollapse
 */
StoreRouterConnectingModule.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], },
    { type: RouterStateSerializer, },
]; };
/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "../../../../../dist/store-devtools/@ngrx/store-devtools.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge__ = __webpack_require__("../../../../rxjs/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__ = __webpack_require__("../../../../rxjs/operator/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_scan__ = __webpack_require__("../../../../rxjs/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_skip__ = __webpack_require__("../../../../rxjs/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_scheduler_queue__ = __webpack_require__("../../../../rxjs/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_scheduler_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_scheduler_queue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_empty__ = __webpack_require__("../../../../rxjs/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_filter__ = __webpack_require__("../../../../rxjs/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operator_share__ = __webpack_require__("../../../../rxjs/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_operator_switchMap__ = __webpack_require__("../../../../rxjs/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_takeUntil__ = __webpack_require__("../../../../rxjs/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_operator_takeUntil__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDevtoolsModule; });
/* unused harmony export StoreDevtools */
/* unused harmony export StoreDevtoolsConfig */
/* unused harmony export ɵi */
/* unused harmony export ɵh */
/* unused harmony export ɵg */
/* unused harmony export ɵk */
/* unused harmony export ɵj */
/* unused harmony export ɵa */
/* unused harmony export ɵf */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵe */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
















var PERFORM_ACTION = 'PERFORM_ACTION';
var RESET = 'RESET';
var ROLLBACK = 'ROLLBACK';
var COMMIT = 'COMMIT';
var SWEEP = 'SWEEP';
var TOGGLE_ACTION = 'TOGGLE_ACTION';
var SET_ACTIONS_ACTIVE = 'SET_ACTIONS_ACTIVE';
var JUMP_TO_STATE = 'JUMP_TO_STATE';
var IMPORT_STATE = 'IMPORT_STATE';
var PerformAction = (function () {
    /**
     * @param {?} action
     * @param {?=} timestamp
     */
    function PerformAction(action, timestamp) {
        this.action = action;
        this.timestamp = timestamp;
        this.type = PERFORM_ACTION;
        if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. ' +
                'Have you misspelled a constant?');
        }
    }
    return PerformAction;
}());
var Reset = (function () {
    /**
     * @param {?=} timestamp
     */
    function Reset(timestamp) {
        this.timestamp = timestamp;
        this.type = RESET;
    }
    return Reset;
}());
var Rollback = (function () {
    /**
     * @param {?=} timestamp
     */
    function Rollback(timestamp) {
        this.timestamp = timestamp;
        this.type = ROLLBACK;
    }
    return Rollback;
}());
var Commit = (function () {
    /**
     * @param {?=} timestamp
     */
    function Commit(timestamp) {
        this.timestamp = timestamp;
        this.type = COMMIT;
    }
    return Commit;
}());
var Sweep = (function () {
    function Sweep() {
        this.type = SWEEP;
    }
    return Sweep;
}());
var ToggleAction = (function () {
    /**
     * @param {?} id
     */
    function ToggleAction(id) {
        this.id = id;
        this.type = TOGGLE_ACTION;
    }
    return ToggleAction;
}());
var JumpToState = (function () {
    /**
     * @param {?} index
     */
    function JumpToState(index) {
        this.index = index;
        this.type = JUMP_TO_STATE;
    }
    return JumpToState;
}());
var ImportState = (function () {
    /**
     * @param {?} nextLiftedState
     */
    function ImportState(nextLiftedState) {
        this.nextLiftedState = nextLiftedState;
        this.type = IMPORT_STATE;
    }
    return ImportState;
}());
/**
 * @param {?} first
 * @param {?} second
 * @return {?}
 */
function difference(first, second) {
    return first.filter(function (item) { return second.indexOf(item) < 0; });
}
/**
 * Provides an app's view into the state of the lifted store.
 * @param {?} liftedState
 * @return {?}
 */
function unliftState(liftedState) {
    var computedStates = liftedState.computedStates, currentStateIndex = liftedState.currentStateIndex;
    var state = computedStates[currentStateIndex].state;
    return state;
}
/**
 * @param {?} liftedState
 * @return {?}
 */
/**
 * Lifts an app's action into an action on the lifted store.
 * @param {?} action
 * @return {?}
 */
function liftAction(action) {
    return new PerformAction(action);
}
/**
 * @param {?} input$
 * @param {?} operators
 * @return {?}
 */
function applyOperators(input$, operators) {
    return operators.reduce(function (source$, _a) {
        var operator = _a[0], args = _a.slice(1);
        return operator.apply(source$, args);
    }, input$);
}
var ExtensionActionTypes = {
    START: 'START',
    DISPATCH: 'DISPATCH',
    STOP: 'STOP',
    ACTION: 'ACTION',
};
var REDUX_DEVTOOLS_EXTENSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('Redux Devtools Extension');
var DevtoolsExtension = (function () {
    /**
     * @param {?} devtoolsExtension
     */
    function DevtoolsExtension(devtoolsExtension) {
        this.instanceId = "ngrx-store-" + Date.now();
        this.devtoolsExtension = devtoolsExtension;
        this.createActionStreams();
    }
    /**
     * @param {?} action
     * @param {?} state
     * @return {?}
     */
    DevtoolsExtension.prototype.notify = function (action, state) {
        if (!this.devtoolsExtension) {
            return;
        }
        this.devtoolsExtension.send(null, state, { serialize: false }, this.instanceId);
    };
    /**
     * @return {?}
     */
    DevtoolsExtension.prototype.createChangesObservable = function () {
        var _this = this;
        if (!this.devtoolsExtension) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_empty__["empty"])();
        }
        return new __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"](function (subscriber) {
            var /** @type {?} */ connection = _this.devtoolsExtension.connect({
                instanceId: _this.instanceId,
            });
            connection.subscribe(function (change) { return subscriber.next(change); });
            return connection.unsubscribe;
        });
    };
    /**
     * @return {?}
     */
    DevtoolsExtension.prototype.createActionStreams = function () {
        var _this = this;
        // Listens to all changes based on our instanceId
        var /** @type {?} */ changes$ = __WEBPACK_IMPORTED_MODULE_13_rxjs_operator_share__["share"].call(this.createChangesObservable());
        // Listen for the start action
        var /** @type {?} */ start$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_filter__["filter"].call(changes$, function (change) { return change.type === ExtensionActionTypes.START; });
        // Listen for the stop action
        var /** @type {?} */ stop$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_filter__["filter"].call(changes$, function (change) { return change.type === ExtensionActionTypes.STOP; });
        // Listen for lifted actions
        var /** @type {?} */ liftedActions$ = applyOperators(changes$, [
            [__WEBPACK_IMPORTED_MODULE_12_rxjs_operator_filter__["filter"], function (change) { return change.type === ExtensionActionTypes.DISPATCH; }],
            [__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"], function (change) { return _this.unwrapAction(change.payload); }],
        ]);
        // Listen for unlifted actions
        var /** @type {?} */ actions$ = applyOperators(changes$, [
            [__WEBPACK_IMPORTED_MODULE_12_rxjs_operator_filter__["filter"], function (change) { return change.type === ExtensionActionTypes.ACTION; }],
            [__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"], function (change) { return _this.unwrapAction(change.payload); }],
        ]);
        var /** @type {?} */ actionsUntilStop$ = __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_takeUntil__["takeUntil"].call(actions$, stop$);
        var /** @type {?} */ liftedUntilStop$ = __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_takeUntil__["takeUntil"].call(liftedActions$, stop$);
        // Only take the action sources between the start/stop events
        this.actions$ = __WEBPACK_IMPORTED_MODULE_14_rxjs_operator_switchMap__["switchMap"].call(start$, function () { return actionsUntilStop$; });
        this.liftedActions$ = __WEBPACK_IMPORTED_MODULE_14_rxjs_operator_switchMap__["switchMap"].call(start$, function () { return liftedUntilStop$; });
    };
    /**
     * @param {?} action
     * @return {?}
     */
    DevtoolsExtension.prototype.unwrapAction = function (action) {
        return typeof action === 'string' ? eval("(" + action + ")") : action;
    };
    return DevtoolsExtension;
}());
DevtoolsExtension.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
DevtoolsExtension.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [REDUX_DEVTOOLS_EXTENSION,] },] },
]; };
var INIT_ACTION = { type: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* INIT */] };
/**
 * Computes the next entry in the log by applying an action.
 * @param {?} reducer
 * @param {?} action
 * @param {?} state
 * @param {?} error
 * @return {?}
 */
function computeNextEntry(reducer, action, state, error) {
    if (error) {
        return {
            state: state,
            error: 'Interrupted by an error up the chain',
        };
    }
    var /** @type {?} */ nextState = state;
    var /** @type {?} */ nextError;
    try {
        nextState = reducer(state, action);
    }
    catch (err) {
        nextError = err.toString();
        console.error(err.stack || err);
    }
    return {
        state: nextState,
        error: nextError,
    };
}
/**
 * Runs the reducer on invalidated actions to get a fresh computation log.
 * @param {?} computedStates
 * @param {?} minInvalidatedStateIndex
 * @param {?} reducer
 * @param {?} committedState
 * @param {?} actionsById
 * @param {?} stagedActionIds
 * @param {?} skippedActionIds
 * @return {?}
 */
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds) {
    // Optimization: exit early and return the same reference
    // if we know nothing could have changed.
    if (minInvalidatedStateIndex >= computedStates.length &&
        computedStates.length === stagedActionIds.length) {
        return computedStates;
    }
    var /** @type {?} */ nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
    for (var /** @type {?} */ i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
        var /** @type {?} */ actionId = stagedActionIds[i];
        var /** @type {?} */ action = actionsById[actionId].action;
        var /** @type {?} */ previousEntry = nextComputedStates[i - 1];
        var /** @type {?} */ previousState = previousEntry ? previousEntry.state : committedState;
        var /** @type {?} */ previousError = previousEntry ? previousEntry.error : undefined;
        var /** @type {?} */ shouldSkip = skippedActionIds.indexOf(actionId) > -1;
        var /** @type {?} */ entry = shouldSkip
            ? previousEntry
            : computeNextEntry(reducer, action, previousState, previousError);
        nextComputedStates.push(entry);
    }
    return nextComputedStates;
}
/**
 * @param {?=} initialCommittedState
 * @param {?=} monitorReducer
 * @return {?}
 */
function liftInitialState(initialCommittedState, monitorReducer) {
    return {
        monitorState: monitorReducer(undefined, {}),
        nextActionId: 1,
        actionsById: { 0: liftAction(INIT_ACTION) },
        stagedActionIds: [0],
        skippedActionIds: [],
        committedState: initialCommittedState,
        currentStateIndex: 0,
        computedStates: [],
    };
}
/**
 * Creates a history state reducer from an app's reducer.
 * @param {?} initialCommittedState
 * @param {?} initialLiftedState
 * @param {?=} monitorReducer
 * @param {?=} options
 * @return {?}
 */
function liftReducerWith(initialCommittedState, initialLiftedState, monitorReducer, options) {
    if (options === void 0) { options = {}; }
    /**
    * Manages how the history actions modify the history state.
    */
    return function (reducer) { return function (liftedState, liftedAction) {
        var _a = liftedState || initialLiftedState, monitorState = _a.monitorState, actionsById = _a.actionsById, nextActionId = _a.nextActionId, stagedActionIds = _a.stagedActionIds, skippedActionIds = _a.skippedActionIds, committedState = _a.committedState, currentStateIndex = _a.currentStateIndex, computedStates = _a.computedStates;
        if (!liftedState) {
            // Prevent mutating initialLiftedState
            actionsById = Object.create(actionsById);
        }
        /**
         * @param {?} n
         * @return {?}
         */
        function commitExcessActions(n) {
            // Auto-commits n-number of excess actions.
            var /** @type {?} */ excess = n;
            var /** @type {?} */ idsToDelete = stagedActionIds.slice(1, excess + 1);
            for (var /** @type {?} */ i = 0; i < idsToDelete.length; i++) {
                if (computedStates[i + 1].error) {
                    // Stop if error is found. Commit actions up to error.
                    excess = i;
                    idsToDelete = stagedActionIds.slice(1, excess + 1);
                    break;
                }
                else {
                    delete actionsById[idsToDelete[i]];
                }
            }
            skippedActionIds = skippedActionIds.filter(function (id) { return idsToDelete.indexOf(id) === -1; });
            stagedActionIds = [0].concat(stagedActionIds.slice(excess + 1));
            committedState = computedStates[excess].state;
            computedStates = computedStates.slice(excess);
            currentStateIndex =
                currentStateIndex > excess ? currentStateIndex - excess : 0;
        }
        // By default, agressively recompute every state whatever happens.
        // This has O(n) performance, so we'll override this to a sensible
        // value whenever we feel like we don't have to recompute the states.
        var /** @type {?} */ minInvalidatedStateIndex = 0;
        switch (liftedAction.type) {
            case RESET: {
                // Get back to the state the store was created with.
                actionsById = { 0: liftAction(INIT_ACTION) };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                committedState = initialCommittedState;
                currentStateIndex = 0;
                computedStates = [];
                break;
            }
            case COMMIT: {
                // Consider the last committed state the new starting point.
                // Squash any staged actions into a single committed state.
                actionsById = { 0: liftAction(INIT_ACTION) };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                committedState = computedStates[currentStateIndex].state;
                currentStateIndex = 0;
                computedStates = [];
                break;
            }
            case ROLLBACK: {
                // Forget about any staged actions.
                // Start again from the last committed state.
                actionsById = { 0: liftAction(INIT_ACTION) };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                currentStateIndex = 0;
                computedStates = [];
                break;
            }
            case TOGGLE_ACTION: {
                // Toggle whether an action with given ID is skipped.
                // Being skipped means it is a no-op during the computation.
                var actionId_1 = liftedAction.id;
                var /** @type {?} */ index = skippedActionIds.indexOf(actionId_1);
                if (index === -1) {
                    skippedActionIds = [actionId_1].concat(skippedActionIds);
                }
                else {
                    skippedActionIds = skippedActionIds.filter(function (id) { return id !== actionId_1; });
                }
                // Optimization: we know history before this action hasn't changed
                minInvalidatedStateIndex = stagedActionIds.indexOf(actionId_1);
                break;
            }
            case SET_ACTIONS_ACTIVE: {
                // Toggle whether an action with given ID is skipped.
                // Being skipped means it is a no-op during the computation.
                var start = liftedAction.start, end = liftedAction.end, active = liftedAction.active;
                var /** @type {?} */ actionIds = [];
                for (var /** @type {?} */ i = start; i < end; i++)
                    actionIds.push(i);
                if (active) {
                    skippedActionIds = difference(skippedActionIds, actionIds);
                }
                else {
                    skippedActionIds = skippedActionIds.concat(actionIds);
                }
                // Optimization: we know history before this action hasn't changed
                minInvalidatedStateIndex = stagedActionIds.indexOf(start);
                break;
            }
            case JUMP_TO_STATE: {
                // Without recomputing anything, move the pointer that tell us
                // which state is considered the current one. Useful for sliders.
                currentStateIndex = liftedAction.index;
                // Optimization: we know the history has not changed.
                minInvalidatedStateIndex = Infinity;
                break;
            }
            case SWEEP: {
                // Forget any actions that are currently being skipped.
                stagedActionIds = difference(stagedActionIds, skippedActionIds);
                skippedActionIds = [];
                currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
                break;
            }
            case PERFORM_ACTION: {
                // Auto-commit as new actions come in.
                if (options.maxAge && stagedActionIds.length === options.maxAge) {
                    commitExcessActions(1);
                }
                if (currentStateIndex === stagedActionIds.length - 1) {
                    currentStateIndex++;
                }
                var /** @type {?} */ actionId = nextActionId++;
                // Mutation! This is the hottest path, and we optimize on purpose.
                // It is safe because we set a new key in a cache dictionary.
                actionsById[actionId] = liftedAction;
                stagedActionIds = stagedActionIds.concat([actionId]);
                // Optimization: we know that only the new action needs computing.
                minInvalidatedStateIndex = stagedActionIds.length - 1;
                break;
            }
            case IMPORT_STATE: {
                // Completely replace everything.
                (_b = liftedAction.nextLiftedState, monitorState = _b.monitorState, actionsById = _b.actionsById, nextActionId = _b.nextActionId, stagedActionIds = _b.stagedActionIds, skippedActionIds = _b.skippedActionIds, committedState = _b.committedState, currentStateIndex = _b.currentStateIndex, computedStates = _b.computedStates);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* UPDATE */]:
            case __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* INIT */]: {
                // Always recompute states on hot reload and init.
                minInvalidatedStateIndex = 0;
                if (options.maxAge && stagedActionIds.length > options.maxAge) {
                    // States must be recomputed before committing excess.
                    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
                    commitExcessActions(stagedActionIds.length - options.maxAge);
                    // Avoid double computation.
                    minInvalidatedStateIndex = Infinity;
                }
                break;
            }
            default: {
                // If the action is not recognized, it's a monitor action.
                // Optimization: a monitor action can't change history.
                minInvalidatedStateIndex = Infinity;
                break;
            }
        }
        computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
        monitorState = monitorReducer(monitorState, liftedAction);
        return {
            monitorState: monitorState,
            actionsById: actionsById,
            nextActionId: nextActionId,
            stagedActionIds: stagedActionIds,
            skippedActionIds: skippedActionIds,
            committedState: committedState,
            currentStateIndex: currentStateIndex,
            computedStates: computedStates,
        };
        var _b;
    }; };
}
var StoreDevtoolsConfig = (function () {
    function StoreDevtoolsConfig() {
    }
    return StoreDevtoolsConfig;
}());
var STORE_DEVTOOLS_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/devtools Options');
var INITIAL_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/devtools Initial Config');
var DevtoolsDispatcher = (function (_super) {
    __extends(DevtoolsDispatcher, _super);
    function DevtoolsDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DevtoolsDispatcher;
}(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["i" /* ActionsSubject */]));
DevtoolsDispatcher.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
DevtoolsDispatcher.ctorParameters = function () { return []; };
var StoreDevtools = (function () {
    /**
     * @param {?} dispatcher
     * @param {?} actions$
     * @param {?} reducers$
     * @param {?} extension
     * @param {?} scannedActions
     * @param {?} initialState
     * @param {?} config
     */
    function StoreDevtools(dispatcher, actions$, reducers$, extension, scannedActions, initialState, config) {
        var liftedInitialState = liftInitialState(initialState, config.monitor);
        var liftReducer = liftReducerWith(initialState, liftedInitialState, config.monitor, config.maxAge ? { maxAge: config.maxAge } : {});
        var liftedAction$ = applyOperators(actions$.asObservable(), [
            [__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_skip__["skip"], 1],
            [__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge__["merge"], extension.actions$],
            [__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"], liftAction],
            [__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge__["merge"], dispatcher, extension.liftedActions$],
            [__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__["observeOn"], __WEBPACK_IMPORTED_MODULE_9_rxjs_scheduler_queue__["queue"]],
        ]);
        var liftedReducer$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(reducers$, liftReducer);
        var liftedStateSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        var liftedStateSubscription = applyOperators(liftedAction$, [
            [__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__["withLatestFrom"], liftedReducer$],
            [
                __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_scan__["scan"],
                function (_a, _b) {
                    var liftedState = _a.state;
                    var action = _b[0], reducer = _b[1];
                    var state = reducer(liftedState, action);
                    extension.notify(action, state);
                    return { state: state, action: action };
                },
                { state: liftedInitialState, action: null },
            ],
        ]).subscribe(function (_a) {
            var state = _a.state, action = _a.action;
            liftedStateSubject.next(state);
            if (action.type === PERFORM_ACTION) {
                var unlifedAction = action.action;
                scannedActions.next(unlifedAction);
            }
        });
        var liftedState$ = liftedStateSubject.asObservable();
        var state$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(liftedState$, unliftState);
        this.stateSubscription = liftedStateSubscription;
        this.dispatcher = dispatcher;
        this.liftedState = liftedState$;
        this.state = state$;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    StoreDevtools.prototype.dispatch = function (action) {
        this.dispatcher.next(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    StoreDevtools.prototype.next = function (action) {
        this.dispatcher.next(action);
    };
    /**
     * @param {?} error
     * @return {?}
     */
    StoreDevtools.prototype.error = function (error) { };
    /**
     * @return {?}
     */
    StoreDevtools.prototype.complete = function () { };
    /**
     * @param {?} action
     * @return {?}
     */
    StoreDevtools.prototype.performAction = function (action) {
        this.dispatch(new PerformAction(action));
    };
    /**
     * @return {?}
     */
    StoreDevtools.prototype.reset = function () {
        this.dispatch(new Reset());
    };
    /**
     * @return {?}
     */
    StoreDevtools.prototype.rollback = function () {
        this.dispatch(new Rollback());
    };
    /**
     * @return {?}
     */
    StoreDevtools.prototype.commit = function () {
        this.dispatch(new Commit());
    };
    /**
     * @return {?}
     */
    StoreDevtools.prototype.sweep = function () {
        this.dispatch(new Sweep());
    };
    /**
     * @param {?} id
     * @return {?}
     */
    StoreDevtools.prototype.toggleAction = function (id) {
        this.dispatch(new ToggleAction(id));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StoreDevtools.prototype.jumpToState = function (index) {
        this.dispatch(new JumpToState(index));
    };
    /**
     * @param {?} nextLiftedState
     * @return {?}
     */
    StoreDevtools.prototype.importState = function (nextLiftedState) {
        this.dispatch(new ImportState(nextLiftedState));
    };
    return StoreDevtools;
}());
StoreDevtools.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
StoreDevtools.ctorParameters = function () { return [
    { type: DevtoolsDispatcher, },
    { type: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["i" /* ActionsSubject */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["j" /* ReducerObservable */], },
    { type: DevtoolsExtension, },
    { type: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* ScannedActionsSubject */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["k" /* INITIAL_STATE */],] },] },
    { type: StoreDevtoolsConfig, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [STORE_DEVTOOLS_CONFIG,] },] },
]; };
var IS_EXTENSION_OR_MONITOR_PRESENT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('Is Devtools Extension or Monitor Present');
/**
 * @param {?} extension
 * @param {?} config
 * @return {?}
 */
function createIsExtensionOrMonitorPresent(extension, config) {
    return Boolean(extension) || config.monitor !== noMonitor;
}
/**
 * @return {?}
 */
function createReduxDevtoolsExtension() {
    var /** @type {?} */ extensionKey = '__REDUX_DEVTOOLS_EXTENSION__';
    if (typeof window === 'object' &&
        typeof ((window))[extensionKey] !== 'undefined') {
        return ((window))[extensionKey];
    }
    else {
        return null;
    }
}
/**
 * @param {?} devtools
 * @return {?}
 */
function createStateObservable(devtools) {
    return devtools.state;
}
/**
 * @return {?}
 */
function noMonitor() {
    return null;
}
/**
 * @param {?} _options
 * @return {?}
 */
function createConfig(_options) {
    var /** @type {?} */ DEFAULT_OPTIONS = {
        maxAge: false,
        monitor: noMonitor,
    };
    var /** @type {?} */ options = typeof _options === 'function' ? _options() : _options;
    var /** @type {?} */ config = Object.assign({}, DEFAULT_OPTIONS, options);
    if (config.maxAge && config.maxAge < 2) {
        throw new Error("Devtools 'maxAge' cannot be less than 2, got " + config.maxAge);
    }
    return config;
}
var StoreDevtoolsModule = (function () {
    function StoreDevtoolsModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    StoreDevtoolsModule.instrument = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: StoreDevtoolsModule,
            providers: [
                DevtoolsExtension,
                DevtoolsDispatcher,
                StoreDevtools,
                {
                    provide: INITIAL_OPTIONS,
                    useValue: options,
                },
                {
                    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
                    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
                    useFactory: createIsExtensionOrMonitorPresent,
                },
                {
                    provide: REDUX_DEVTOOLS_EXTENSION,
                    useFactory: createReduxDevtoolsExtension,
                },
                {
                    provide: STORE_DEVTOOLS_CONFIG,
                    deps: [INITIAL_OPTIONS],
                    useFactory: createConfig,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["l" /* StateObservable */],
                    deps: [StoreDevtools],
                    useFactory: createStateObservable,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["m" /* ReducerManagerDispatcher */],
                    useExisting: DevtoolsDispatcher,
                },
            ],
        };
    };
    return StoreDevtoolsModule;
}());
StoreDevtoolsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{},] },
];
/**
 * @nocollapse
 */
StoreDevtoolsModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "../../../../../dist/store/@ngrx/store.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_scheduler_queue__ = __webpack_require__("../../../../rxjs/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_scheduler_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_scheduler_queue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__ = __webpack_require__("../../../../rxjs/operator/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_scan__ = __webpack_require__("../../../../rxjs/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_pluck__ = __webpack_require__("../../../../rxjs/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Store; });
/* unused harmony export combineReducers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return compose; });
/* unused harmony export createReducerFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return INIT; });
/* unused harmony export ReducerManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ReducerObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ReducerManagerDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ScannedActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFeatureSelector; });
/* unused harmony export State */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return StateObservable; });
/* unused harmony export reduceState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INITIAL_STATE; });
/* unused harmony export _REDUCER_FACTORY */
/* unused harmony export REDUCER_FACTORY */
/* unused harmony export _INITIAL_REDUCERS */
/* unused harmony export INITIAL_REDUCERS */
/* unused harmony export STORE_FEATURES */
/* unused harmony export _INITIAL_STATE */
/* unused harmony export META_REDUCERS */
/* unused harmony export _STORE_REDUCERS */
/* unused harmony export _FEATURE_REDUCERS */
/* unused harmony export FEATURE_REDUCERS */
/* unused harmony export _FEATURE_REDUCERS_TOKEN */
/* unused harmony export StoreRootModule */
/* unused harmony export StoreFeatureModule */
/* unused harmony export _initialStateFactory */
/* unused harmony export _createStoreReducers */
/* unused harmony export _createFeatureReducers */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* unused harmony export ɵb */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











/**
 * @param {?} reducers
 * @param {?=} initialState
 * @return {?}
 */
function combineReducers(reducers, initialState) {
    if (initialState === void 0) { initialState = {}; }
    var /** @type {?} */ reducerKeys = Object.keys(reducers);
    var /** @type {?} */ finalReducers = {};
    for (var /** @type {?} */ i = 0; i < reducerKeys.length; i++) {
        var /** @type {?} */ key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var /** @type {?} */ finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        state = state || initialState;
        var /** @type {?} */ hasChanged = false;
        var /** @type {?} */ nextState = {};
        for (var /** @type {?} */ i = 0; i < finalReducerKeys.length; i++) {
            var /** @type {?} */ key = finalReducerKeys[i];
            var /** @type {?} */ reducer = finalReducers[key];
            var /** @type {?} */ previousStateForKey = state[key];
            var /** @type {?} */ nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
/**
 * @template T
 * @param {?} object
 * @param {?} keyToRemove
 * @return {?}
 */
function omit(object, keyToRemove) {
    return Object.keys(object)
        .filter(function (key) { return key !== keyToRemove; })
        .reduce(function (result, key) {
        return Object.assign(result, (_a = {}, _a[key] = object[key], _a));
        var _a;
    }, {});
}
/**
 * @param {...?} functions
 * @return {?}
 */
function compose() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var /** @type {?} */ last = functions[functions.length - 1];
        var /** @type {?} */ rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
}
/**
 * @template T, V
 * @param {?} reducerFactory
 * @param {?=} metaReducers
 * @return {?}
 */
function createReducerFactory(reducerFactory, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        return compose.apply(null, metaReducers.concat([reducerFactory]));
    }
    return reducerFactory;
}
var _INITIAL_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Internal Initial State');
var INITIAL_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Initial State');
var REDUCER_FACTORY = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Reducer Factory');
var _REDUCER_FACTORY = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Reducer Factory Provider');
var INITIAL_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Initial Reducers');
var _INITIAL_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Internal Initial Reducers');
var META_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Meta Reducers');
var STORE_FEATURES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Store Features');
var _STORE_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Internal Store Reducers');
var _FEATURE_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Internal Feature Reducers');
var _FEATURE_REDUCERS_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Internal Feature Reducers Token');
var FEATURE_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('@ngrx/store Feature Reducers');
var INIT = ('@ngrx/store/init');
var ActionsSubject = (function (_super) {
    __extends(ActionsSubject, _super);
    function ActionsSubject() {
        return _super.call(this, { type: INIT }) || this;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    ActionsSubject.prototype.next = function (action) {
        if (typeof action === 'undefined') {
            throw new TypeError("Actions must be objects");
        }
        else if (typeof action.type === 'undefined') {
            throw new TypeError("Actions must have a type property");
        }
        _super.prototype.next.call(this, action);
    };
    /**
     * @return {?}
     */
    ActionsSubject.prototype.complete = function () {
        /* noop */
    };
    /**
     * @return {?}
     */
    ActionsSubject.prototype.ngOnDestroy = function () {
        _super.prototype.complete.call(this);
    };
    return ActionsSubject;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]));
ActionsSubject.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
ActionsSubject.ctorParameters = function () { return []; };
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];
/**
 * @abstract
 */
var ReducerObservable = (function (_super) {
    __extends(ReducerObservable, _super);
    function ReducerObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerObservable;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]));
/**
 * @abstract
 */
var ReducerManagerDispatcher = (function (_super) {
    __extends(ReducerManagerDispatcher, _super);
    function ReducerManagerDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerManagerDispatcher;
}(ActionsSubject));
var UPDATE = ('@ngrx/store/update-reducers');
var ReducerManager = (function (_super) {
    __extends(ReducerManager, _super);
    /**
     * @param {?} dispatcher
     * @param {?} initialState
     * @param {?} reducers
     * @param {?} reducerFactory
     */
    function ReducerManager(dispatcher, initialState, reducers, reducerFactory) {
        var _this = _super.call(this, reducerFactory(reducers, initialState)) || this;
        _this.dispatcher = dispatcher;
        _this.initialState = initialState;
        _this.reducers = reducers;
        _this.reducerFactory = reducerFactory;
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ReducerManager.prototype.addFeature = function (_a) {
        var reducers = _a.reducers, reducerFactory = _a.reducerFactory, metaReducers = _a.metaReducers, initialState = _a.initialState, key = _a.key;
        var /** @type {?} */ reducer = typeof reducers === 'function'
            ? function (state, action) { return reducers(state || initialState, action); }
            : createReducerFactory(reducerFactory, metaReducers)(reducers, initialState);
        this.addReducer(key, reducer);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ReducerManager.prototype.removeFeature = function (_a) {
        var key = _a.key;
        this.removeReducer(key);
    };
    /**
     * @param {?} key
     * @param {?} reducer
     * @return {?}
     */
    ReducerManager.prototype.addReducer = function (key, reducer) {
        this.reducers = Object.assign({}, this.reducers, (_a = {}, _a[key] = reducer, _a));
        this.updateReducers();
        var _a;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ReducerManager.prototype.removeReducer = function (key) {
        this.reducers = omit(this.reducers, key);
        this.updateReducers();
    };
    /**
     * @return {?}
     */
    ReducerManager.prototype.updateReducers = function () {
        this.next(this.reducerFactory(this.reducers, this.initialState));
        this.dispatcher.next({ type: UPDATE });
    };
    /**
     * @return {?}
     */
    ReducerManager.prototype.ngOnDestroy = function () {
        this.complete();
    };
    return ReducerManager;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]));
ReducerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
ReducerManager.ctorParameters = function () { return [
    { type: ReducerManagerDispatcher, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [INITIAL_STATE,] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [INITIAL_REDUCERS,] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [REDUCER_FACTORY,] },] },
]; };
var REDUCER_MANAGER_PROVIDERS = [
    ReducerManager,
    { provide: ReducerObservable, useExisting: ReducerManager },
    { provide: ReducerManagerDispatcher, useExisting: ActionsSubject },
];
var ScannedActionsSubject = (function (_super) {
    __extends(ScannedActionsSubject, _super);
    function ScannedActionsSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ScannedActionsSubject.prototype.ngOnDestroy = function () {
        this.complete();
    };
    return ScannedActionsSubject;
}(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]));
ScannedActionsSubject.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
ScannedActionsSubject.ctorParameters = function () { return []; };
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [
    ScannedActionsSubject,
];
/**
 * @abstract
 */
var StateObservable = (function (_super) {
    __extends(StateObservable, _super);
    function StateObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateObservable;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]));
var State = (function (_super) {
    __extends(State, _super);
    /**
     * @param {?} actions$
     * @param {?} reducer$
     * @param {?} scannedActions
     * @param {?} initialState
     */
    function State(actions$, reducer$, scannedActions, initialState) {
        var _this = _super.call(this, initialState) || this;
        var actionsOnQueue$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__["observeOn"].call(actions$, __WEBPACK_IMPORTED_MODULE_4_rxjs_scheduler_queue__["queue"]);
        var withLatestReducer$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_withLatestFrom__["withLatestFrom"].call(actionsOnQueue$, reducer$);
        var stateAndAction$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_scan__["scan"].call(withLatestReducer$, reduceState, initialState);
        _this.stateSubscription = stateAndAction$.subscribe({
            next: function (_a) {
                var state = _a.state, action = _a.action;
                _this.next(state);
                scannedActions.next(action);
            },
        });
        return _this;
    }
    /**
     * @return {?}
     */
    State.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
        this.complete();
    };
    return State;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]));
State.INIT = INIT;
State.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
State.ctorParameters = function () { return [
    { type: ActionsSubject, },
    { type: ReducerObservable, },
    { type: ScannedActionsSubject, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [INITIAL_STATE,] },] },
]; };
/**
 * @template T, V
 * @param {?=} stateActionPair
 * @param {?=} __1
 * @return {?}
 */
function reduceState(stateActionPair, _a) {
    if (stateActionPair === void 0) { stateActionPair = { state: undefined }; }
    var action = _a[0], reducer = _a[1];
    var state = stateActionPair.state;
    return { state: reducer(state, action), action: action };
}
var STATE_PROVIDERS = [
    State,
    { provide: StateObservable, useExisting: State },
];
var Store = (function (_super) {
    __extends(Store, _super);
    /**
     * @param {?} state$
     * @param {?} actionsObserver
     * @param {?} reducerManager
     */
    function Store(state$, actionsObserver, reducerManager) {
        var _this = _super.call(this) || this;
        _this.actionsObserver = actionsObserver;
        _this.reducerManager = reducerManager;
        _this.source = state$;
        return _this;
    }
    /**
     * @param {?} pathOrMapFn
     * @param {...?} paths
     * @return {?}
     */
    Store.prototype.select = function (pathOrMapFn) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        var /** @type {?} */ mapped$;
        if (typeof pathOrMapFn === 'string') {
            mapped$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_pluck__["pluck"].call.apply(__WEBPACK_IMPORTED_MODULE_9_rxjs_operator_pluck__["pluck"], [this, pathOrMapFn].concat(paths));
        }
        else if (typeof pathOrMapFn === 'function') {
            mapped$ = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_map__["map"].call(this, pathOrMapFn);
        }
        else {
            throw new TypeError("Unexpected type '" + typeof pathOrMapFn + "' in select operator," +
                " expected 'string' or 'function'");
        }
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_distinctUntilChanged__["distinctUntilChanged"].call(mapped$);
    };
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    Store.prototype.lift = function (operator) {
        var /** @type {?} */ store = new Store(this, this.actionsObserver, this.reducerManager);
        store.operator = operator;
        return store;
    };
    /**
     * @template V
     * @param {?} action
     * @return {?}
     */
    Store.prototype.dispatch = function (action) {
        this.actionsObserver.next(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    Store.prototype.next = function (action) {
        this.actionsObserver.next(action);
    };
    /**
     * @param {?} err
     * @return {?}
     */
    Store.prototype.error = function (err) {
        this.actionsObserver.error(err);
    };
    /**
     * @return {?}
     */
    Store.prototype.complete = function () {
        this.actionsObserver.complete();
    };
    /**
     * @template State, Actions
     * @param {?} key
     * @param {?} reducer
     * @return {?}
     */
    Store.prototype.addReducer = function (key, reducer) {
        this.reducerManager.addReducer(key, reducer);
    };
    /**
     * @template Key
     * @param {?} key
     * @return {?}
     */
    Store.prototype.removeReducer = function (key) {
        this.reducerManager.removeReducer(key);
    };
    return Store;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]));
Store.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */] },
];
/**
 * @nocollapse
 */
Store.ctorParameters = function () { return [
    { type: StateObservable, },
    { type: ActionsSubject, },
    { type: ReducerManager, },
]; };
var STORE_PROVIDERS = [Store];
var StoreRootModule = (function () {
    /**
     * @param {?} actions$
     * @param {?} reducer$
     * @param {?} scannedActions$
     */
    function StoreRootModule(actions$, reducer$, scannedActions$) {
    }
    return StoreRootModule;
}());
StoreRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{},] },
];
/**
 * @nocollapse
 */
StoreRootModule.ctorParameters = function () { return [
    { type: ActionsSubject, },
    { type: ReducerObservable, },
    { type: ScannedActionsSubject, },
]; };
var StoreFeatureModule = (function () {
    /**
     * @param {?} features
     * @param {?} featureReducers
     * @param {?} reducerManager
     */
    function StoreFeatureModule(features, featureReducers, reducerManager) {
        this.features = features;
        this.featureReducers = featureReducers;
        this.reducerManager = reducerManager;
        features
            .map(function (feature, index) {
            var featureReducerCollection = featureReducers.shift();
            var reducers = featureReducerCollection[index];
            return Object.assign({}, feature, { reducers: reducers, initialState: _initialStateFactory(feature.initialState) });
        })
            .forEach(function (feature) { return reducerManager.addFeature(feature); });
    }
    /**
     * @return {?}
     */
    StoreFeatureModule.prototype.ngOnDestroy = function () {
        var _this = this;
        this.features.forEach(function (feature) { return _this.reducerManager.removeFeature(feature); });
    };
    return StoreFeatureModule;
}());
StoreFeatureModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{},] },
];
/**
 * @nocollapse
 */
StoreFeatureModule.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [STORE_FEATURES,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */], args: [FEATURE_REDUCERS,] },] },
    { type: ReducerManager, },
]; };
var StoreModule = (function () {
    function StoreModule() {
    }
    /**
     * @param {?} reducers
     * @param {?=} config
     * @return {?}
     */
    StoreModule.forRoot = function (reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreRootModule,
            providers: [
                { provide: _INITIAL_STATE, useValue: config.initialState },
                {
                    provide: INITIAL_STATE,
                    useFactory: _initialStateFactory,
                    deps: [_INITIAL_STATE],
                },
                { provide: _INITIAL_REDUCERS, useValue: reducers },
                {
                    provide: _STORE_REDUCERS,
                    useExisting: reducers instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */] ? reducers : _INITIAL_REDUCERS,
                },
                {
                    provide: INITIAL_REDUCERS,
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Injector */], _INITIAL_REDUCERS, [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */](_STORE_REDUCERS)]],
                    useFactory: _createStoreReducers,
                },
                {
                    provide: META_REDUCERS,
                    useValue: config.metaReducers ? config.metaReducers : [],
                },
                {
                    provide: _REDUCER_FACTORY,
                    useValue: config.reducerFactory
                        ? config.reducerFactory
                        : combineReducers,
                },
                {
                    provide: REDUCER_FACTORY,
                    deps: [_REDUCER_FACTORY, META_REDUCERS],
                    useFactory: createReducerFactory,
                },
                ACTIONS_SUBJECT_PROVIDERS,
                REDUCER_MANAGER_PROVIDERS,
                SCANNED_ACTIONS_SUBJECT_PROVIDERS,
                STATE_PROVIDERS,
                STORE_PROVIDERS,
            ],
        };
    };
    /**
     * @param {?} featureName
     * @param {?} reducers
     * @param {?=} config
     * @return {?}
     */
    StoreModule.forFeature = function (featureName, reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreFeatureModule,
            providers: [
                {
                    provide: STORE_FEATURES,
                    multi: true,
                    useValue: /** @type {?} */ ({
                        key: featureName,
                        reducerFactory: config.reducerFactory
                            ? config.reducerFactory
                            : combineReducers,
                        metaReducers: config.metaReducers ? config.metaReducers : [],
                        initialState: config.initialState,
                    }),
                },
                { provide: _FEATURE_REDUCERS, multi: true, useValue: reducers },
                {
                    provide: _FEATURE_REDUCERS_TOKEN,
                    multi: true,
                    useExisting: reducers instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */] ? reducers : _FEATURE_REDUCERS,
                },
                {
                    provide: FEATURE_REDUCERS,
                    multi: true,
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Injector */],
                        _FEATURE_REDUCERS,
                        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */](_FEATURE_REDUCERS_TOKEN)],
                    ],
                    useFactory: _createFeatureReducers,
                },
            ],
        };
    };
    return StoreModule;
}());
StoreModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{},] },
];
/**
 * @nocollapse
 */
StoreModule.ctorParameters = function () { return []; };
/**
 * @param {?} injector
 * @param {?} reducers
 * @param {?} tokenReducers
 * @return {?}
 */
function _createStoreReducers(injector, reducers, tokenReducers) {
    return reducers instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */] ? injector.get(reducers) : reducers;
}
/**
 * @param {?} injector
 * @param {?} reducerCollection
 * @param {?} tokenReducerCollection
 * @return {?}
 */
function _createFeatureReducers(injector, reducerCollection, tokenReducerCollection) {
    return reducerCollection.map(function (reducer, index) {
        return reducer instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */] ? injector.get(reducer) : reducer;
    });
}
/**
 * @param {?} initialState
 * @return {?}
 */
function _initialStateFactory(initialState) {
    if (typeof initialState === 'function') {
        return initialState();
    }
    return initialState;
}
/**
 * @param {?} t
 * @return {?}
 */
function memoize(t) {
    var /** @type {?} */ lastArguments = null;
    var /** @type {?} */ lastResult = null;
    /**
     * @return {?}
     */
    function reset() {
        lastArguments = null;
        lastResult = null;
    }
    /**
     * @return {?}
     */
    function memoized() {
        if (!lastArguments) {
            lastResult = t.apply(null, arguments);
            lastArguments = arguments;
            return lastResult;
        }
        for (var /** @type {?} */ i = 0; i < arguments.length; i++) {
            if (arguments[i] !== lastArguments[i]) {
                lastResult = t.apply(null, arguments);
                lastArguments = arguments;
                return lastResult;
            }
        }
        return lastResult;
    }
    return { memoized: memoized, reset: reset };
}
/**
 * @param {...?} input
 * @return {?}
 */
function createSelector() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    var /** @type {?} */ args = input;
    if (Array.isArray(args[0])) {
        var head = args[0], tail = args.slice(1);
        args = head.concat(tail);
    }
    var /** @type {?} */ selectors = args.slice(0, args.length - 1);
    var /** @type {?} */ projector = args[args.length - 1];
    var /** @type {?} */ memoizedSelectors = selectors.filter(function (selector) { return selector.release && typeof selector.release === 'function'; });
    var /** @type {?} */ memoizedProjector = memoize(function () {
        var selectors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selectors[_i] = arguments[_i];
        }
        return projector.apply(null, selectors);
    });
    var /** @type {?} */ memoizedState = memoize(function (state) {
        var /** @type {?} */ args = selectors.map(function (fn) { return fn(state); });
        return memoizedProjector.memoized.apply(null, args);
    });
    /**
     * @return {?}
     */
    function release() {
        memoizedState.reset();
        memoizedProjector.reset();
        memoizedSelectors.forEach(function (selector) { return selector.release(); });
    }
    return Object.assign(memoizedState.memoized, {
        release: release,
        projector: memoizedProjector.memoized,
    });
}
/**
 * @template T
 * @param {?} featureName
 * @return {?}
 */
function createFeatureSelector(featureName) {
    var _a = memoize(function (state) {
        return state[featureName];
    }), memoized = _a.memoized, reset = _a.reset;
    return Object.assign(memoized, { release: reset, projector: memoized });
}
/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "../../../../../example-app async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./books/books.module": [
		"../../../../../example-app/app/books/books.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../example-app async recursive";

/***/ }),

/***/ "../../../../../example-app/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../../dist/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_db__ = __webpack_require__("../../../../@ngrx/db/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__ = __webpack_require__("../../../../../dist/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__ = __webpack_require__("../../../../../dist/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_core_module__ = __webpack_require__("../../../../../example-app/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_auth_module__ = __webpack_require__("../../../../../example-app/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes__ = __webpack_require__("../../../../../example-app/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reducers__ = __webpack_require__("../../../../../example-app/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__db__ = __webpack_require__("../../../../../example-app/app/db.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_utils__ = __webpack_require__("../../../../../example-app/app/shared/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_containers_app__ = __webpack_require__("../../../../../example-app/app/core/containers/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__environments_environment__ = __webpack_require__("../../../../../example-app/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__routes__["a" /* routes */], { useHash: true }),
            /**
             * StoreModule.forRoot is imported once in the root module, accepting a reducer
             * function or object map of reducer functions. If passed an object of
             * reducers, combineReducers will be run creating your application
             * meta-reducer. This returns all providers for an @ngrx/store
             * based application.
             */
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__reducers__["a" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_14__reducers__["b" /* metaReducers */] }),
            /**
             * @ngrx/router-store keeps router state up-to-date in the store.
             */
            __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__["a" /* StoreRouterConnectingModule */],
            /**
             * Store devtools instrument the store retaining past versions of state
             * and recalculating new states. This enables powerful time-travel
             * debugging.
             *
             * To use the debugger, install the Redux Devtools extension for either
             * Chrome or Firefox
             *
             * See: https://github.com/zalmoxisus/redux-devtools-extension
             */
            !__WEBPACK_IMPORTED_MODULE_18__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
            /**
             * EffectsModule.forRoot() is imported once in the root module and
             * sets up the effects class to be initialized immediately when the
             * application starts.
             *
             * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
             */
            __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* EffectsModule */].forRoot([]),
            /**
             * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
             * service available.
             */
            __WEBPACK_IMPORTED_MODULE_8__ngrx_db__["a" /* DBModule */].provideDB(__WEBPACK_IMPORTED_MODULE_15__db__["a" /* schema */]),
            __WEBPACK_IMPORTED_MODULE_11__core_core_module__["a" /* CoreModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__auth_auth_module__["a" /* AuthModule */].forRoot(),
        ],
        providers: [
            /**
             * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
             * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
             * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
             */
            { provide: __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__["b" /* RouterStateSerializer */], useClass: __WEBPACK_IMPORTED_MODULE_16__shared_utils__["a" /* CustomRouterStateSerializer */] },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__core_containers_app__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/actions/auth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOGIN_REDIRECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LoginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoginRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logout; });
var LOGIN = '[Auth] Login';
var LOGOUT = '[Auth] Logout';
var LOGIN_SUCCESS = '[Auth] Login Success';
var LOGIN_FAILURE = '[Auth] Login Failure';
var LOGIN_REDIRECT = '[Auth] Login Redirect';
var Login = (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = LOGIN;
    }
    return Login;
}());

var LoginSuccess = (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());

var LoginFailure = (function () {
    function LoginFailure(payload) {
        this.payload = payload;
        this.type = LOGIN_FAILURE;
    }
    return LoginFailure;
}());

var LoginRedirect = (function () {
    function LoginRedirect() {
        this.type = LOGIN_REDIRECT;
    }
    return LoginRedirect;
}());

var Logout = (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../../dist/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_login_page_component__ = __webpack_require__("../../../../../example-app/app/auth/containers/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_form_component__ = __webpack_require__("../../../../../example-app/app/auth/components/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../example-app/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__("../../../../../example-app/app/auth/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects_auth_effects__ = __webpack_require__("../../../../../example-app/app/auth/effects/auth.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__("../../../../../example-app/app/auth/reducers/index.ts");
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* unused harmony export RootAuthModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var COMPONENTS = [__WEBPACK_IMPORTED_MODULE_7__containers_login_page_component__["a" /* LoginPageComponent */], __WEBPACK_IMPORTED_MODULE_8__components_login_form_component__["a" /* LoginFormComponent */]];
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule.forRoot = function () {
        return {
            ngModule: RootAuthModule,
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]],
        };
    };
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */]],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], AuthModule);

var RootAuthModule = (function () {
    function RootAuthModule() {
    }
    return RootAuthModule;
}());
RootAuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            AuthModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([{ path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__containers_login_page_component__["a" /* LoginPageComponent */] }]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* StoreModule */].forFeature('auth', __WEBPACK_IMPORTED_MODULE_12__reducers__["b" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_11__effects_auth_effects__["a" /* AuthEffects */]]),
        ],
    })
], RootAuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/components/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = (function () {
    function LoginFormComponent() {
        this.submitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */](''),
        });
    }
    Object.defineProperty(LoginFormComponent.prototype, "pending", {
        set: function (isPending) {
            if (isPending) {
                this.form.disable();
            }
            else {
                this.form.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    };
    return LoginFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LoginFormComponent.prototype, "pending", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", String)
], LoginFormComponent.prototype, "errorMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", Object)
], LoginFormComponent.prototype, "submitted", void 0);
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-login-form',
        template: "\n    <md-card>\n      <md-card-title>Login</md-card-title>\n      <md-card-content>\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n          <p>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Username\" formControlName=\"username\">\n            </md-input-container>\n          </p>\n\n          <p>\n            <md-input-container>\n              <input type=\"password\" mdInput placeholder=\"Password\" formControlName=\"password\">\n            </md-input-container>\n          </p>\n\n          <p *ngIf=\"errorMessage\" class=\"loginError\">\n            {{ errorMessage }}\n          </p>          \n        \n          <p class=\"loginButtons\">\n            <button type=\"submit\" md-button>Login</button>\n          </p>\n\n        </form>\n      </md-card-content>\n    </md-card>\n  ",
        styles: [
            "\n    :host {\n      display: flex;\n      justify-content: center;\n      margin: 72px 0;\n    }\n\n    md-card-title,\n    md-card-content {\n      display: flex;\n      justify-content: center;\n    }\n\n    input {\n      width: 300px;\n    }\n\n    .loginError {\n      padding: 16px;\n      width: 300px;\n      font-color: white;\n      background-color: red;\n    }\n\n    .loginButtons {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n    }\n  ",
        ],
    }),
    __metadata("design:paramtypes", [])
], LoginFormComponent);

//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/containers/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../example-app/app/auth/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_auth__ = __webpack_require__("../../../../../example-app/app/auth/actions/auth.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = (function () {
    function LoginPageComponent(store) {
        this.store = store;
        this.pending$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* getLoginPagePending */]);
        this.error$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["d" /* getLoginPageError */]);
    }
    LoginPageComponent.prototype.ngOnInit = function () { };
    LoginPageComponent.prototype.onSubmit = function ($event) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_auth__["j" /* Login */]($event));
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-login-page',
        template: "\n    <bc-login-form\n      (submitted)=\"onSubmit($event)\"\n      [pending]=\"pending$ | async\"\n      [errorMessage]=\"error$ | async\">\n    </bc-login-form>\n  ",
        styles: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], LoginPageComponent);

var _a;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/effects/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_exhaustMap__ = __webpack_require__("../../../../rxjs/add/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_exhaustMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_exhaustMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../../dist/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../example-app/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_auth__ = __webpack_require__("../../../../../example-app/app/auth/actions/auth.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AuthEffects = (function () {
    function AuthEffects(actions$, authService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.login$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__actions_auth__["b" /* LOGIN */])
            .map(function (action) { return action.payload; })
            .exhaustMap(function (auth) {
            return _this.authService
                .login(auth)
                .map(function (user) { return new __WEBPACK_IMPORTED_MODULE_10__actions_auth__["f" /* LoginSuccess */]({ user: user }); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_10__actions_auth__["g" /* LoginFailure */](error)); });
        });
        this.loginSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__actions_auth__["c" /* LOGIN_SUCCESS */])
            .do(function () { return _this.router.navigate(['/']); });
        this.loginRedirect$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__actions_auth__["h" /* LOGIN_REDIRECT */], __WEBPACK_IMPORTED_MODULE_10__actions_auth__["e" /* LOGOUT */])
            .do(function (authed) {
            _this.router.navigate(['/login']);
        });
    }
    return AuthEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "login$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], AuthEffects.prototype, "loginSuccess$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], AuthEffects.prototype, "loginRedirect$", void 0);
AuthEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthEffects);

var _a, _b, _c;
//# sourceMappingURL=auth.effects.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/reducers/auth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth__ = __webpack_require__("../../../../../example-app/app/auth/actions/auth.ts");
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUser; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loggedIn: false,
    user: null,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["c" /* LOGIN_SUCCESS */]: {
            return __assign({}, state, { loggedIn: true, user: action.payload.user });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["e" /* LOGOUT */]: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
var getLoggedIn = function (state) { return state.loggedIn; };
var getUser = function (state) { return state.user; };
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__("../../../../../example-app/app/auth/reducers/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page__ = __webpack_require__("../../../../../example-app/app/auth/reducers/login-page.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* unused harmony export selectAuthState */
/* unused harmony export selectAuthStatusState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLoggedIn; });
/* unused harmony export getUser */
/* unused harmony export selectLoginPageState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLoginPageError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLoginPagePending; });



var reducers = {
    status: __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* reducer */],
    loginPage: __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* reducer */],
};
var selectAuthState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('auth');
var selectAuthStatusState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectAuthState, function (state) { return state.status; });
var getLoggedIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectAuthStatusState, __WEBPACK_IMPORTED_MODULE_1__auth__["b" /* getLoggedIn */]);
var getUser = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectAuthStatusState, __WEBPACK_IMPORTED_MODULE_1__auth__["c" /* getUser */]);
var selectLoginPageState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectAuthState, function (state) { return state.loginPage; });
var getLoginPageError = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectLoginPageState, __WEBPACK_IMPORTED_MODULE_2__login_page__["b" /* getError */]);
var getLoginPagePending = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectLoginPageState, __WEBPACK_IMPORTED_MODULE_2__login_page__["c" /* getPending */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/reducers/login-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth__ = __webpack_require__("../../../../../example-app/app/auth/actions/auth.ts");
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPending; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    error: null,
    pending: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["b" /* LOGIN */]: {
            return __assign({}, state, { error: null, pending: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["c" /* LOGIN_SUCCESS */]: {
            return __assign({}, state, { error: null, pending: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["d" /* LOGIN_FAILURE */]: {
            return __assign({}, state, { error: action.payload, pending: false });
        }
        default: {
            return state;
        }
    }
}
var getError = function (state) { return state.error; };
var getPending = function (state) { return state.pending; };
//# sourceMappingURL=login-page.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_auth__ = __webpack_require__("../../../../../example-app/app/auth/actions/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__("../../../../../example-app/app/auth/reducers/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.store
            .select(__WEBPACK_IMPORTED_MODULE_5__reducers__["a" /* getLoggedIn */])
            .map(function (authed) {
            if (!authed) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_auth__["i" /* LoginRedirect */]());
                return false;
            }
            return true;
        })
            .take(1);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../example-app/app/auth/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (_a) {
        var username = _a.username, password = _a.password;
        /**
         * Simulate a failed login to display the error
         * message for the login form.
         */
        if (username !== 'test') {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__["_throw"])('Invalid username or password');
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])({ name: 'User' });
    };
    AuthService.prototype.logout = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(true);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/actions/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OPEN_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLOSE_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OpenSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseSidenav; });
var OPEN_SIDENAV = '[Layout] Open Sidenav';
var CLOSE_SIDENAV = '[Layout] Close Sidenav';
var OpenSidenav = (function () {
    function OpenSidenav() {
        this.type = OPEN_SIDENAV;
    }
    return OpenSidenav;
}());

var CloseSidenav = (function () {
    function CloseSidenav() {
        this.type = CLOSE_SIDENAV;
    }
    return CloseSidenav;
}());

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/components/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-layout',
        template: "\n    <md-sidenav-container fullscreen>\n\n      <ng-content></ng-content>\n\n    </md-sidenav-container>\n  ",
        styles: [
            "\n    md-sidenav-container {\n      background: rgba(0, 0, 0, 0.03);\n    }\n\n    *, /deep/ * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  ",
        ],
    })
], LayoutComponent);

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/components/nav-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavItemComponent = (function () {
    function NavItemComponent() {
        this.icon = '';
        this.hint = '';
        this.routerLink = '/';
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    return NavItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "hint", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "routerLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "navigate", void 0);
NavItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-nav-item',
        template: "\n    <a md-list-item [routerLink]=\"routerLink\" (click)=\"navigate.emit()\">\n      <md-icon md-list-icon>{{ icon }}</md-icon>\n      <span md-line><ng-content></ng-content></span>\n      <span md-line class=\"secondary\">{{ hint }}</span>\n    </a>\n  ",
        styles: [
            "\n    .secondary {\n      color: rgba(0, 0, 0, 0.54);\n    }\n  ",
        ],
    })
], NavItemComponent);

//# sourceMappingURL=nav-item.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/components/sidenav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
        this.open = false;
    }
    return SidenavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "open", void 0);
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-sidenav',
        template: "\n    <md-sidenav [opened]=\"open\">\n      <md-nav-list>\n        <ng-content></ng-content>\n      </md-nav-list>\n    </md-sidenav>\n  ",
        styles: [
            "\n    md-sidenav {\n      width: 300px;\n    }\n  ",
        ],
    })
], SidenavComponent);

//# sourceMappingURL=sidenav.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/components/toolbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.openMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    return ToolbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "openMenu", void 0);
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-toolbar',
        template: "\n    <md-toolbar color=\"primary\">\n      <button md-icon-button (click)=\"openMenu.emit()\">\n        <md-icon>menu</md-icon>\n      </button>\n      <ng-content></ng-content>\n    </md-toolbar>\n  ",
    })
], ToolbarComponent);

//# sourceMappingURL=toolbar.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/containers/app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__("../../../../rxjs/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../example-app/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_reducers__ = __webpack_require__("../../../../../example-app/app/auth/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_layout__ = __webpack_require__("../../../../../example-app/app/core/actions/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_actions_auth__ = __webpack_require__("../../../../../example-app/app/auth/actions/auth.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        /**
         * Selectors can be applied with the `select` operator which passes the state
         * tree to the provided selector
         */
        this.showSidenav$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getShowSidenav */]);
        this.loggedIn$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__auth_reducers__["a" /* getLoggedIn */]);
    }
    AppComponent.prototype.closeSidenav = function () {
        /**
         * All state updates are handled through dispatched actions in 'container'
         * components. This provides a clear, reproducible history of state
         * updates and user interaction through the life of our
         * application.
         */
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_layout__["a" /* CloseSidenav */]());
    };
    AppComponent.prototype.openSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_layout__["b" /* OpenSidenav */]());
    };
    AppComponent.prototype.logout = function () {
        this.closeSidenav();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__auth_actions_auth__["a" /* Logout */]());
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'bc-app',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <bc-layout>\n      <bc-sidenav [open]=\"showSidenav$ | async\">\n        <bc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"loggedIn$ | async\" routerLink=\"/\" icon=\"book\" hint=\"View your book collection\">\n          My Collection\n        </bc-nav-item>\n        <bc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"loggedIn$ | async\" routerLink=\"/books/find\" icon=\"search\" hint=\"Find your next book!\">\n          Browse Books\n        </bc-nav-item>\n        <bc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"!(loggedIn$ | async)\">\n          Sign In\n        </bc-nav-item>\n        <bc-nav-item (navigate)=\"logout()\" *ngIf=\"loggedIn$ | async\">\n          Sign Out\n        </bc-nav-item>\n      </bc-sidenav>\n      <bc-toolbar (openMenu)=\"openSidenav()\">\n        Book Collection\n      </bc-toolbar>\n\n      <router-outlet></router-outlet>\n    </bc-layout>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/containers/not-found-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
    }
    return NotFoundPageComponent;
}());
NotFoundPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-not-found-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <md-card>\n      <md-card-title>404: Not Found</md-card-title>\n      <md-card-content>\n        <p>Hey! It looks like this page doesn't exist yet.</p>\n      </md-card-content>\n      <md-card-actions>\n        <button md-raised-button color=\"primary\" routerLink=\"/\">Take Me Home</button>\n      </md-card-actions>\n    </md-card>\n  ",
        styles: [
            "\n    :host {\n      text-align: center;\n    }\n  ",
        ],
    })
], NotFoundPageComponent);

//# sourceMappingURL=not-found-page.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_app__ = __webpack_require__("../../../../../example-app/app/core/containers/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_not_found_page__ = __webpack_require__("../../../../../example-app/app/core/containers/not-found-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layout__ = __webpack_require__("../../../../../example-app/app/core/components/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nav_item__ = __webpack_require__("../../../../../example-app/app/core/components/nav-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sidenav__ = __webpack_require__("../../../../../example-app/app/core/components/sidenav.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_toolbar__ = __webpack_require__("../../../../../example-app/app/core/components/toolbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_google_books__ = __webpack_require__("../../../../../example-app/app/core/services/google-books.ts");
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__containers_app__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_5__containers_not_found_page__["a" /* NotFoundPageComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_layout__["a" /* LayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_nav_item__["a" /* NavItemComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_sidenav__["a" /* SidenavComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_toolbar__["a" /* ToolbarComponent */],
];
var CoreModule = CoreModule_1 = (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_google_books__["a" /* GoogleBooksService */]],
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */]],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], CoreModule);

var CoreModule_1;
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/reducers/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layout__ = __webpack_require__("../../../../../example-app/app/core/actions/layout.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getShowSidenav; });

var initialState = {
    showSidenav: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["c" /* CLOSE_SIDENAV */]:
            return {
                showSidenav: false,
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["d" /* OPEN_SIDENAV */]:
            return {
                showSidenav: true,
            };
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../../../../example-app/app/core/services/google-books.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleBooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleBooksService = (function () {
    function GoogleBooksService(http) {
        this.http = http;
        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
    }
    GoogleBooksService.prototype.searchBooks = function (queryTitle) {
        return this.http
            .get(this.API_PATH + "?q=" + queryTitle)
            .map(function (res) { return res.json().items || []; });
    };
    GoogleBooksService.prototype.retrieveBook = function (volumeId) {
        return this.http.get(this.API_PATH + "/" + volumeId).map(function (res) { return res.json(); });
    };
    return GoogleBooksService;
}());
GoogleBooksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GoogleBooksService);

var _a;
//# sourceMappingURL=google-books.js.map

/***/ }),

/***/ "../../../../../example-app/app/db.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
var schema = {
    version: 1,
    name: 'books_app',
    stores: {
        books: {
            autoIncrement: true,
            primaryKey: 'id',
        },
    },
};
//# sourceMappingURL=db.js.map

/***/ }),

/***/ "../../../../../example-app/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../example-app/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__ = __webpack_require__("../../../../../dist/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_reducers_layout__ = __webpack_require__("../../../../../example-app/app/core/reducers/layout.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return metaReducers; });
/* unused harmony export getLayoutState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getShowSidenav; });



/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
var reducers = {
    layout: __WEBPACK_IMPORTED_MODULE_4__core_reducers_layout__["a" /* reducer */],
    routerReducer: __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__["c" /* routerReducer */],
};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
var metaReducers = !__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production
    ? [logger, __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__["storeFreeze"]]
    : [];
/**
 * Layout Reducers
 */
var getLayoutState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('layout');
var getShowSidenav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getLayoutState, __WEBPACK_IMPORTED_MODULE_4__core_reducers_layout__["b" /* getShowSidenav */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../example-app/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_guard_service__ = __webpack_require__("../../../../../example-app/app/auth/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_containers_not_found_page__ = __webpack_require__("../../../../../example-app/app/core/containers/not-found-page.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    {
        path: 'books',
        loadChildren: './books/books.module#BooksModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__auth_services_auth_guard_service__["a" /* AuthGuard */]],
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__core_containers_not_found_page__["a" /* NotFoundPageComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../example-app/app/shared/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRouterStateSerializer; });
var CustomRouterStateSerializer = (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        return { url: url, queryParams: queryParams };
    };
    return CustomRouterStateSerializer;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../example-app/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../example-app/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../example-app/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../example-app/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../example-app/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../example-app/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.

















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example-app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map