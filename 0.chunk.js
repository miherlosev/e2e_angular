webpackJsonp([0],{

/***/ "../../../../../dist/entity/@ngrx/entity.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createEntityAdapter; });

/**
 * @template V
 * @return {?}
 */
function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
/**
 * @template V
 * @return {?}
 */
function createInitialStateFactory() {
    /**
     * @param {?=} additionalState
     * @return {?}
     */
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}
/**
 * @template T
 * @return {?}
 */
function createSelectorsFactory() {
    return {
        /**
         * @template V
         * @param {?} selectState
         * @return {?}
         */
        getSelectors: function (selectState) {
            var /** @type {?} */ selectIds = function (state) { return state.ids; };
            var /** @type {?} */ selectEntities = function (state) { return state.entities; };
            var /** @type {?} */ selectAll = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return ((entities))[id]; }); });
            var /** @type {?} */ selectTotal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectIds, function (ids) { return ids.length; });
            return {
                selectIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectIds),
                selectEntities: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectEntities),
                selectAll: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectAll),
                selectTotal: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectTotal),
            };
        },
    };
}
/**
 * @template V, R
 * @param {?} mutator
 * @return {?}
 */
function createStateOperator(mutator) {
    return function operation(arg, state) {
        var /** @type {?} */ clonedEntityState = {
            ids: state.ids.slice(),
            entities: Object.assign({}, state.entities),
        };
        var /** @type {?} */ didMutate = mutator(arg, clonedEntityState);
        if (didMutate) {
            return Object.assign({}, state, clonedEntityState);
        }
        return state;
    };
}
/**
 * @template T
 * @param {?} selectId
 * @return {?}
 */
function createUnsortedStateAdapter(selectId) {
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function addOneMutably(entity, state) {
        var /** @type {?} */ key = selectId(entity);
        if (key in state.entities) {
            return false;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return true;
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function addManyMutably(entities, state) {
        var /** @type {?} */ didMutate = false;
        for (var /** @type {?} */ index in entities) {
            didMutate = addOneMutably(entities[index], state) || didMutate;
        }
        return didMutate;
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function addAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return true;
    }
    /**
     * @param {?} key
     * @param {?} state
     * @return {?}
     */
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    /**
     * @param {?} keys
     * @param {?} state
     * @return {?}
     */
    function removeManyMutably(keys, state) {
        var /** @type {?} */ didMutate = keys
            .filter(function (key) { return key in state.entities; })
            .map(function (key) { return delete state.entities[key]; }).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
        return didMutate;
    }
    /**
     * @template S
     * @param {?} state
     * @return {?}
     */
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    /**
     * @param {?} keys
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function takeNewKey(keys, update, state) {
        var /** @type {?} */ original = state.entities[update.id];
        var /** @type {?} */ updated = Object.assign({}, original, update.changes);
        var /** @type {?} */ newKey = selectId(updated);
        if (newKey !== update.id) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
    }
    /**
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    /**
     * @param {?} updates
     * @param {?} state
     * @return {?}
     */
    function updateManyMutably(updates, state) {
        var /** @type {?} */ newKeys = {};
        var /** @type {?} */ didMutate = updates
            .filter(function (update) { return update.id in state.entities; })
            .map(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
        if (didMutate) {
            state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
        }
        return didMutate;
    }
    return {
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(addAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
    };
}
/**
 * @template T
 * @param {?} selectId
 * @param {?} sort
 * @return {?}
 */
function createSortedStateAdapter(selectId, sort) {
    var _a = createUnsortedStateAdapter(selectId), removeOne = _a.removeOne, removeMany = _a.removeMany, removeAll = _a.removeAll;
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    /**
     * @param {?} newModels
     * @param {?} state
     * @return {?}
     */
    function addManyMutably(newModels, state) {
        var /** @type {?} */ models = newModels.filter(function (model) { return !(selectId(model) in state.entities); });
        return merge(models, state);
    }
    /**
     * @param {?} models
     * @param {?} state
     * @return {?}
     */
    function addAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return true;
    }
    /**
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    /**
     * @param {?} models
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return;
        }
        var /** @type {?} */ original = state.entities[update.id];
        var /** @type {?} */ updated = Object.assign({}, original, update.changes);
        delete state.entities[update.id];
        models.push(updated);
    }
    /**
     * @param {?} updates
     * @param {?} state
     * @return {?}
     */
    function updateManyMutably(updates, state) {
        var /** @type {?} */ models = [];
        updates.forEach(function (update) { return takeUpdatedModel(models, update, state); });
        if (models.length) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
        return merge(models, state);
    }
    /**
     * @param {?} models
     * @param {?} state
     * @return {?}
     */
    function merge(models, state) {
        if (models.length === 0) {
            return false;
        }
        models.sort(sort);
        var /** @type {?} */ ids = [];
        var /** @type {?} */ i = 0;
        var /** @type {?} */ j = 0;
        while (i < models.length && j < state.ids.length) {
            var /** @type {?} */ model = models[i];
            var /** @type {?} */ modelId = selectId(model);
            var /** @type {?} */ entityId = state.ids[j];
            var /** @type {?} */ entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach(function (model, i) {
            state.entities[selectId(model)] = model;
        });
        return true;
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        addAll: createStateOperator(addAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
    };
}
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _a = Object.assign({ sortComparer: false, selectId: function (instance) { return instance.id; } }, options), selectId = _a.selectId, sortComparer = _a.sortComparer;
    var /** @type {?} */ stateFactory = createInitialStateFactory();
    var /** @type {?} */ selectorsFactory = createSelectorsFactory();
    var /** @type {?} */ stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return Object.assign({}, stateFactory, selectorsFactory, stateAdapter);
}
/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "../../../../../example-app/app/books/actions/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SEARCH_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Select; });
var SEARCH = '[Book] Search';
var SEARCH_COMPLETE = '[Book] Search Complete';
var LOAD = '[Book] Load';
var SELECT = '[Book] Select';
/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
var Search = (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SEARCH;
    }
    return Search;
}());

var SearchComplete = (function () {
    function SearchComplete(payload) {
        this.payload = payload;
        this.type = SEARCH_COMPLETE;
    }
    return SearchComplete;
}());

var Load = (function () {
    function Load(payload) {
        this.payload = payload;
        this.type = LOAD;
    }
    return Load;
}());

var Select = (function () {
    function Select(payload) {
        this.payload = payload;
        this.type = SELECT;
    }
    return Select;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/actions/collection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ADD_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADD_BOOK_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return REMOVE_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REMOVE_BOOK_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_SUCCESS; });
/* unused harmony export LOAD_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return AddBookSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return AddBookFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoveBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return RemoveBookSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return RemoveBookFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LoadFail; });
var ADD_BOOK = '[Collection] Add Book';
var ADD_BOOK_SUCCESS = '[Collection] Add Book Success';
var ADD_BOOK_FAIL = '[Collection] Add Book Fail';
var REMOVE_BOOK = '[Collection] Remove Book';
var REMOVE_BOOK_SUCCESS = '[Collection] Remove Book Success';
var REMOVE_BOOK_FAIL = '[Collection] Remove Book Fail';
var LOAD = '[Collection] Load';
var LOAD_SUCCESS = '[Collection] Load Success';
var LOAD_FAIL = '[Collection] Load Fail';
/**
 * Add Book to Collection Actions
 */
var AddBook = (function () {
    function AddBook(payload) {
        this.payload = payload;
        this.type = ADD_BOOK;
    }
    return AddBook;
}());

var AddBookSuccess = (function () {
    function AddBookSuccess(payload) {
        this.payload = payload;
        this.type = ADD_BOOK_SUCCESS;
    }
    return AddBookSuccess;
}());

var AddBookFail = (function () {
    function AddBookFail(payload) {
        this.payload = payload;
        this.type = ADD_BOOK_FAIL;
    }
    return AddBookFail;
}());

/**
 * Remove Book from Collection Actions
 */
var RemoveBook = (function () {
    function RemoveBook(payload) {
        this.payload = payload;
        this.type = REMOVE_BOOK;
    }
    return RemoveBook;
}());

var RemoveBookSuccess = (function () {
    function RemoveBookSuccess(payload) {
        this.payload = payload;
        this.type = REMOVE_BOOK_SUCCESS;
    }
    return RemoveBookSuccess;
}());

var RemoveBookFail = (function () {
    function RemoveBookFail(payload) {
        this.payload = payload;
        this.type = REMOVE_BOOK_FAIL;
    }
    return RemoveBookFail;
}());

/**
 * Load Collection Actions
 */
var Load = (function () {
    function Load() {
        this.type = LOAD;
    }
    return Load;
}());

var LoadSuccess = (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var LoadFail = (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = LOAD_FAIL;
    }
    return LoadFail;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/books.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../../dist/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../example-app/app/books/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects_book__ = __webpack_require__("../../../../../example-app/app/books/effects/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_collection__ = __webpack_require__("../../../../../example-app/app/books/effects/collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_book_exists__ = __webpack_require__("../../../../../example-app/app/books/guards/book-exists.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_find_book_page__ = __webpack_require__("../../../../../example-app/app/books/containers/find-book-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_view_book_page__ = __webpack_require__("../../../../../example-app/app/books/containers/view-book-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_selected_book_page__ = __webpack_require__("../../../../../example-app/app/books/containers/selected-book-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_collection_page__ = __webpack_require__("../../../../../example-app/app/books/containers/collection-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reducers__ = __webpack_require__("../../../../../example-app/app/books/reducers/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var BooksModule = (function () {
    function BooksModule() {
    }
    return BooksModule;
}());
BooksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
                { path: 'find', component: __WEBPACK_IMPORTED_MODULE_10__containers_find_book_page__["a" /* FindBookPageComponent */] },
                {
                    path: ':id',
                    component: __WEBPACK_IMPORTED_MODULE_11__containers_view_book_page__["a" /* ViewBookPageComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_book_exists__["a" /* BookExistsGuard */]],
                },
                { path: '', component: __WEBPACK_IMPORTED_MODULE_13__containers_collection_page__["a" /* CollectionPageComponent */] },
            ]),
            /**
             * StoreModule.forFeature is used for composing state
             * from feature modules. These modules can be loaded
             * eagerly or lazily and will be dynamically added to
             * the existing state.
             */
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* StoreModule */].forFeature('books', __WEBPACK_IMPORTED_MODULE_14__reducers__["a" /* reducers */]),
            /**
             * Effects.forFeature is used to register effects
             * from feature modules. Effects can be loaded
             * eagerly or lazily and will be started immediately.
             *
             * All Effects will only be instantiated once regardless of
             * whether they are registered once or multiple times.
             */
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["a" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_7__effects_book__["a" /* BookEffects */], __WEBPACK_IMPORTED_MODULE_8__effects_collection__["a" /* CollectionEffects */]]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__containers_find_book_page__["a" /* FindBookPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__containers_view_book_page__["a" /* ViewBookPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__containers_selected_book_page__["a" /* SelectedBookPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__containers_collection_page__["a" /* CollectionPageComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__guards_book_exists__["a" /* BookExistsGuard */]],
    })
], BooksModule);

//# sourceMappingURL=books.module.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/components/book-authors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("../../../../../example-app/app/books/models/book.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAuthorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookAuthorsComponent = (function () {
    function BookAuthorsComponent() {
    }
    Object.defineProperty(BookAuthorsComponent.prototype, "authors", {
        get: function () {
            return this.book.volumeInfo.authors;
        },
        enumerable: true,
        configurable: true
    });
    return BookAuthorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"]) === "function" && _a || Object)
], BookAuthorsComponent.prototype, "book", void 0);
BookAuthorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-book-authors',
        template: "\n    <h5 md-subheader>Written By:</h5>\n    <span>\n      {{ authors | bcAddCommas }}\n    </span>\n  ",
        styles: [
            "\n    h5 {\n      margin-bottom: 5px;\n    }\n  ",
        ],
    })
], BookAuthorsComponent);

var _a;
//# sourceMappingURL=book-authors.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/components/book-detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("../../../../../example-app/app/books/models/book.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookDetailComponent = (function () {
    function BookDetailComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    Object.defineProperty(BookDetailComponent.prototype, "id", {
        /**
         * Tip: Utilize getters to keep templates clean
         */
        get: function () {
            return this.book.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "title", {
        get: function () {
            return this.book.volumeInfo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "subtitle", {
        get: function () {
            return this.book.volumeInfo.subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "description", {
        get: function () {
            return this.book.volumeInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookDetailComponent.prototype, "thumbnail", {
        get: function () {
            return (this.book.volumeInfo.imageLinks &&
                this.book.volumeInfo.imageLinks.smallThumbnail);
        },
        enumerable: true,
        configurable: true
    });
    return BookDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"]) === "function" && _a || Object)
], BookDetailComponent.prototype, "book", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", Boolean)
], BookDetailComponent.prototype, "inCollection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", Object)
], BookDetailComponent.prototype, "add", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", Object)
], BookDetailComponent.prototype, "remove", void 0);
BookDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-book-detail',
        template: "\n    <md-card *ngIf=\"book\">\n      <md-card-title-group>\n        <md-card-title>{{ title }}</md-card-title>\n        <md-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</md-card-subtitle>\n        <img md-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n      </md-card-title-group>\n      <md-card-content>\n        <p [innerHtml]=\"description\"></p>\n      </md-card-content>\n      <md-card-footer class=\"footer\">\n        <bc-book-authors [book]=\"book\"></bc-book-authors>\n      </md-card-footer>\n      <md-card-actions align=\"start\">\n        <button md-raised-button color=\"warn\" *ngIf=\"inCollection\" (click)=\"remove.emit(book)\">\n        Remove Book from Collection\n        </button>\n\n        <button md-raised-button color=\"primary\" *ngIf=\"!inCollection\" (click)=\"add.emit(book)\">\n        Add Book to Collection\n        </button>\n      </md-card-actions>\n    </md-card>\n\n  ",
        styles: [
            "\n    :host {\n      display: flex;\n      justify-content: center;\n      margin: 75px 0;\n    }\n    md-card {\n      max-width: 600px;\n    }\n    md-card-title-group {\n      margin-left: 0;\n    }\n    img {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content {\n      margin: 15px 0 50px;\n    }\n    md-card-actions {\n      margin: 25px 0 0 !important;\n    }\n    md-card-footer {\n      padding: 0 25px 25px;\n      position: relative;\n    }\n  ",
        ],
    })
], BookDetailComponent);

var _a;
//# sourceMappingURL=book-detail.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/components/book-preview-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPreviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookPreviewListComponent = (function () {
    function BookPreviewListComponent() {
    }
    return BookPreviewListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", Array)
], BookPreviewListComponent.prototype, "books", void 0);
BookPreviewListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-book-preview-list',
        template: "\n    <bc-book-preview *ngFor=\"let book of books\" [book]=\"book\"></bc-book-preview>\n  ",
        styles: [
            "\n    :host {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n  ",
        ],
    })
], BookPreviewListComponent);

//# sourceMappingURL=book-preview-list.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/components/book-preview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("../../../../../example-app/app/books/models/book.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookPreviewComponent = (function () {
    function BookPreviewComponent() {
    }
    Object.defineProperty(BookPreviewComponent.prototype, "id", {
        get: function () {
            return this.book.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "title", {
        get: function () {
            return this.book.volumeInfo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "subtitle", {
        get: function () {
            return this.book.volumeInfo.subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "description", {
        get: function () {
            return this.book.volumeInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookPreviewComponent.prototype, "thumbnail", {
        get: function () {
            if (this.book.volumeInfo.imageLinks) {
                return this.book.volumeInfo.imageLinks.smallThumbnail;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return BookPreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_book__["Book"]) === "function" && _a || Object)
], BookPreviewComponent.prototype, "book", void 0);
BookPreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-book-preview',
        template: "\n    <a [routerLink]=\"['/books', id]\">\n      <md-card>\n        <md-card-title-group>\n          <img md-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n          <md-card-title>{{ title | bcEllipsis:35 }}</md-card-title>\n          <md-card-subtitle *ngIf=\"subtitle\">{{ subtitle | bcEllipsis:40 }}</md-card-subtitle>\n        </md-card-title-group>\n        <md-card-content>\n          <p *ngIf=\"description\">{{ description | bcEllipsis }}</p>\n        </md-card-content>\n        <md-card-footer>\n          <bc-book-authors [book]=\"book\"></bc-book-authors>\n        </md-card-footer>\n      </md-card>\n    </a>\n  ",
        styles: [
            "\n    md-card {\n      width: 400px;\n      height: 300px;\n      margin: 15px;\n    }\n    @media only screen and (max-width: 768px) {\n      md-card {\n        margin: 15px 0 !important;\n      }\n    }\n    md-card:hover {\n      box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, .5);\n    }\n    md-card-title {\n      margin-right: 10px;\n    }\n    md-card-title-group {\n      margin: 0;\n    }\n    a {\n      color: inherit;\n      text-decoration: none;\n    }\n    img {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content {\n      margin-top: 15px;\n      margin: 15px 0 0;\n    }\n    span {\n      display: inline-block;\n      font-size: 13px;\n    }\n    md-card-footer {\n      padding: 0 25px 25px;\n    }\n  ",
        ],
    })
], BookPreviewComponent);

var _a;
//# sourceMappingURL=book-preview.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/components/book-search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookSearchComponent = (function () {
    function BookSearchComponent() {
        this.query = '';
        this.searching = false;
        this.search = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* EventEmitter */]();
    }
    return BookSearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Input */])(),
    __metadata("design:type", Object)
], BookSearchComponent.prototype, "query", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Input */])(),
    __metadata("design:type", Object)
], BookSearchComponent.prototype, "searching", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_7" /* Output */])(),
    __metadata("design:type", Object)
], BookSearchComponent.prototype, "search", void 0);
BookSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Component */])({
        selector: 'bc-book-search',
        template: "\n    <md-card>\n      <md-card-title>Find a Book</md-card-title>\n      <md-card-content>\n        <md-input-container>\n          <input mdInput placeholder=\"Search for a book\" [value]=\"query\" (keyup)=\"search.emit($event.target.value)\">\n        </md-input-container>\n        <md-spinner [class.show]=\"searching\"></md-spinner>\n      </md-card-content>\n    </md-card>\n  ",
        styles: [
            "\n    md-card-title,\n    md-card-content {\n      display: flex;\n      justify-content: center;\n    }\n\n    input {\n      width: 300px;\n    }\n\n    md-card-spinner {\n      padding-left: 60px; // Make room for the spinner\n    }\n\n    md-spinner {\n      width: 30px;\n      height: 30px;\n      position: relative;\n      top: 10px;\n      left: 10px;\n      opacity: 0.0;\n    }\n\n    md-spinner.show {\n      opacity: 1.0;\n    }\n  ",
        ],
    })
], BookSearchComponent);

//# sourceMappingURL=book-search.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_authors__ = __webpack_require__("../../../../../example-app/app/books/components/book-authors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_detail__ = __webpack_require__("../../../../../example-app/app/books/components/book-detail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_preview__ = __webpack_require__("../../../../../example-app/app/books/components/book-preview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_preview_list__ = __webpack_require__("../../../../../example-app/app/books/components/book-preview-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_search__ = __webpack_require__("../../../../../example-app/app/books/components/book-search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_pipes__ = __webpack_require__("../../../../../example-app/app/shared/pipes/index.ts");
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__book_authors__["a" /* BookAuthorsComponent */],
    __WEBPACK_IMPORTED_MODULE_6__book_detail__["a" /* BookDetailComponent */],
    __WEBPACK_IMPORTED_MODULE_7__book_preview__["a" /* BookPreviewComponent */],
    __WEBPACK_IMPORTED_MODULE_8__book_preview_list__["a" /* BookPreviewListComponent */],
    __WEBPACK_IMPORTED_MODULE_9__book_search__["a" /* BookSearchComponent */],
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_pipes__["a" /* PipesModule */],
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/containers/collection-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__("../../../../rxjs/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../example-app/app/books/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_collection__ = __webpack_require__("../../../../../example-app/app/books/actions/collection.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionPageComponent = (function () {
    function CollectionPageComponent(store) {
        this.store = store;
        this.books$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["d" /* getBookCollection */]);
    }
    CollectionPageComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_collection__["q" /* Load */]());
    };
    return CollectionPageComponent;
}());
CollectionPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'bc-collection-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <md-card>\n      <md-card-title>My Collection</md-card-title>\n    </md-card>\n\n    <bc-book-preview-list [books]=\"books$ | async\"></bc-book-preview-list>\n  ",
        /**
         * Container components are permitted to have just enough styles
         * to bring the view together. If the number of styles grow,
         * consider breaking them out into presentational
         * components.
         */
        styles: [
            "\n    md-card-title {\n      display: flex;\n      justify-content: center;\n    }\n  ",
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], CollectionPageComponent);

var _a;
//# sourceMappingURL=collection-page.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/containers/find-book-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../example-app/app/books/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_book__ = __webpack_require__("../../../../../example-app/app/books/actions/book.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindBookPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindBookPageComponent = (function () {
    function FindBookPageComponent(store) {
        this.store = store;
        this.searchQuery$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["g" /* getSearchQuery */]).take(1);
        this.books$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["h" /* getSearchResults */]);
        this.loading$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["i" /* getSearchLoading */]);
    }
    FindBookPageComponent.prototype.search = function (query) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_book__["h" /* Search */](query));
    };
    return FindBookPageComponent;
}());
FindBookPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'bc-find-book-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <bc-book-search [query]=\"searchQuery$ | async\" [searching]=\"loading$ | async\" (search)=\"search($event)\"></bc-book-search>\n    <bc-book-preview-list [books]=\"books$ | async\"></bc-book-preview-list>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], FindBookPageComponent);

var _a;
//# sourceMappingURL=find-book-page.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/containers/selected-book-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../example-app/app/books/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_collection__ = __webpack_require__("../../../../../example-app/app/books/actions/collection.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedBookPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectedBookPageComponent = (function () {
    function SelectedBookPageComponent(store) {
        this.store = store;
        this.book$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["b" /* getSelectedBook */]);
        this.isSelectedBookInCollection$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* isSelectedBookInCollection */]);
    }
    SelectedBookPageComponent.prototype.addToCollection = function (book) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_collection__["a" /* AddBook */](book));
    };
    SelectedBookPageComponent.prototype.removeFromCollection = function (book) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_collection__["b" /* RemoveBook */](book));
    };
    return SelectedBookPageComponent;
}());
SelectedBookPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'bc-selected-book-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <bc-book-detail\n      [book]=\"book$ | async\"\n      [inCollection]=\"isSelectedBookInCollection$ | async\"\n      (add)=\"addToCollection($event)\"\n      (remove)=\"removeFromCollection($event)\">\n    </bc-book-detail>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], SelectedBookPageComponent);

var _a;
//# sourceMappingURL=selected-book-page.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/containers/view-book-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_book__ = __webpack_require__("../../../../../example-app/app/books/actions/book.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBookPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
var ViewBookPageComponent = (function () {
    function ViewBookPageComponent(store, route) {
        this.actionsSubscription = route.params
            .map(function (params) { return new __WEBPACK_IMPORTED_MODULE_5__actions_book__["g" /* Select */](params.id); })
            .subscribe(store);
    }
    ViewBookPageComponent.prototype.ngOnDestroy = function () {
        this.actionsSubscription.unsubscribe();
    };
    return ViewBookPageComponent;
}());
ViewBookPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Component */])({
        selector: 'bc-view-book-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <bc-selected-book-page></bc-selected-book-page>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ViewBookPageComponent);

var _a, _b;
//# sourceMappingURL=view-book-page.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/effects/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__ = __webpack_require__("../../../../rxjs/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../../dist/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Scheduler__ = __webpack_require__("../../../../rxjs/Scheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Scheduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Scheduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_scheduler_async__ = __webpack_require__("../../../../rxjs/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_scheduler_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_scheduler_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_empty__ = __webpack_require__("../../../../rxjs/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_services_google_books__ = __webpack_require__("../../../../../example-app/app/core/services/google-books.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_book__ = __webpack_require__("../../../../../example-app/app/books/actions/book.ts");
/* unused harmony export SEARCH_DEBOUNCE */
/* unused harmony export SEARCH_SCHEDULER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















var SEARCH_DEBOUNCE = new __WEBPACK_IMPORTED_MODULE_6__angular_core__["e" /* InjectionToken */]('Search Debounce');
var SEARCH_SCHEDULER = new __WEBPACK_IMPORTED_MODULE_6__angular_core__["e" /* InjectionToken */]('Search Scheduler');
/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */
var BookEffects = (function () {
    function BookEffects(actions$, googleBooks, debounce, 
        /**
           * You inject an optional Scheduler that will be undefined
           * in normal application usage, but its injected here so that you can mock out
           * during testing using the RxJS TestScheduler for simulating passages of time.
           */
        scheduler) {
        if (debounce === void 0) { debounce = 300; }
        var _this = this;
        this.actions$ = actions$;
        this.googleBooks = googleBooks;
        this.debounce = debounce;
        this.scheduler = scheduler;
        this.search$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions_book__["a" /* SEARCH */])
            .debounceTime(this.debounce, this.scheduler || __WEBPACK_IMPORTED_MODULE_10_rxjs_scheduler_async__["async"])
            .map(function (action) { return action.payload; })
            .switchMap(function (query) {
            if (query === '') {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_empty__["empty"])();
            }
            var nextSearch$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_14__actions_book__["a" /* SEARCH */]).skip(1);
            return _this.googleBooks
                .searchBooks(query)
                .takeUntil(nextSearch$)
                .map(function (books) { return new __WEBPACK_IMPORTED_MODULE_14__actions_book__["e" /* SearchComplete */](books); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_14__actions_book__["e" /* SearchComplete */]([])); });
        });
    }
    return BookEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], BookEffects.prototype, "search$", void 0);
BookEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["f" /* Injectable */])(),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["j" /* Optional */])()),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["g" /* Inject */])(SEARCH_DEBOUNCE)),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["j" /* Optional */])()),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["g" /* Inject */])(SEARCH_SCHEDULER)),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_13__core_services_google_books__["a" /* GoogleBooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__core_services_google_books__["a" /* GoogleBooksService */]) === "function" && _c || Object, Number, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Scheduler__["Scheduler"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_rxjs_Scheduler__["Scheduler"]) === "function" && _d || Object])
], BookEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=book.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/effects/collection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../../dist/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_db__ = __webpack_require__("../../../../@ngrx/db/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_defer__ = __webpack_require__("../../../../rxjs/observable/defer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_collection__ = __webpack_require__("../../../../../example-app/app/books/actions/collection.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CollectionEffects = (function () {
    function CollectionEffects(actions$, db) {
        var _this = this;
        this.actions$ = actions$;
        this.db = db;
        /**
         * This effect does not yield any actions back to the store. Set
         * `dispatch` to false to hint to @ngrx/effects that it should
         * ignore any elements of this effect stream.
         *
         * The `defer` observable accepts an observable factory function
         * that is called when the observable is subscribed to.
         * Wrapping the database open call in `defer` makes
         * effect easier to test.
         */
        this.openDB$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_defer__["defer"])(function () {
            return _this.db.open('books_app');
        });
        this.loadCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_collection__["c" /* LOAD */])
            .switchMap(function () {
            return _this.db
                .query('books')
                .toArray()
                .map(function (books) { return new __WEBPACK_IMPORTED_MODULE_11__actions_collection__["i" /* LoadSuccess */](books); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_collection__["j" /* LoadFail */](error)); });
        });
        this.addBookToCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_collection__["k" /* ADD_BOOK */])
            .map(function (action) { return action.payload; })
            .mergeMap(function (book) {
            return _this.db
                .insert('books', [book])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_11__actions_collection__["l" /* AddBookSuccess */](book); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_collection__["m" /* AddBookFail */](book)); });
        });
        this.removeBookFromCollection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_collection__["n" /* REMOVE_BOOK */])
            .map(function (action) { return action.payload; })
            .mergeMap(function (book) {
            return _this.db
                .executeWrite('books', 'delete', [book.id])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_11__actions_collection__["o" /* RemoveBookSuccess */](book); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_collection__["p" /* RemoveBookFail */](book)); });
        });
    }
    return CollectionEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], CollectionEffects.prototype, "openDB$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], CollectionEffects.prototype, "loadCollection$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], CollectionEffects.prototype, "addBookToCollection$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], CollectionEffects.prototype, "removeBookFromCollection$", void 0);
CollectionEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* Actions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_db__["b" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_db__["b" /* Database */]) === "function" && _f || Object])
], CollectionEffects);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=collection.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/guards/book-exists.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let__ = __webpack_require__("../../../../rxjs/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_services_google_books__ = __webpack_require__("../../../../../example-app/app/core/services/google-books.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__("../../../../../example-app/app/books/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions_book__ = __webpack_require__("../../../../../example-app/app/books/actions/book.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookExistsGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
var BookExistsGuard = (function () {
    function BookExistsGuard(store, googleBooks, router) {
        this.store = store;
        this.googleBooks = googleBooks;
        this.router = router;
    }
    /**
     * This method creates an observable that waits for the `loaded` property
     * of the collection state to turn `true`, emitting one time once loading
     * has finished.
     */
    BookExistsGuard.prototype.waitForCollectionToLoad = function () {
        return this.store
            .select(__WEBPACK_IMPORTED_MODULE_12__reducers__["e" /* getCollectionLoaded */])
            .filter(function (loaded) { return loaded; })
            .take(1);
    };
    /**
     * This method checks if a book with the given ID is already registered
     * in the Store
     */
    BookExistsGuard.prototype.hasBookInStore = function (id) {
        return this.store
            .select(__WEBPACK_IMPORTED_MODULE_12__reducers__["f" /* getBookEntities */])
            .map(function (entities) { return !!entities[id]; })
            .take(1);
    };
    /**
     * This method loads a book with the given ID from the API and caches
     * it in the store, returning `true` or `false` if it was found.
     */
    BookExistsGuard.prototype.hasBookInApi = function (id) {
        var _this = this;
        return this.googleBooks
            .retrieveBook(id)
            .map(function (bookEntity) { return new __WEBPACK_IMPORTED_MODULE_13__actions_book__["f" /* Load */](bookEntity); })
            .do(function (action) { return _this.store.dispatch(action); })
            .map(function (book) { return !!book; })
            .catch(function () {
            _this.router.navigate(['/404']);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(false);
        });
    };
    /**
     * `hasBook` composes `hasBookInStore` and `hasBookInApi`. It first checks
     * if the book is in store, and if not it then checks if it is in the
     * API.
     */
    BookExistsGuard.prototype.hasBook = function (id) {
        var _this = this;
        return this.hasBookInStore(id).switchMap(function (inStore) {
            if (inStore) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(inStore);
            }
            return _this.hasBookInApi(id);
        });
    };
    /**
     * This is the actual method the router will call when our guard is run.
     *
     * Our guard waits for the collection to load, then it checks if we need
     * to request a book from the API or if we already have it in our cache.
     * If it finds it in the cache or in the API, it returns an Observable
     * of `true` and the route is rendered successfully.
     *
     * If it was unable to find it in our cache or in the API, this guard
     * will return an Observable of `false`, causing the router to move
     * on to the next candidate route. In this case, it will move on
     * to the 404 page.
     */
    BookExistsGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.waitForCollectionToLoad().switchMap(function () {
            return _this.hasBook(route.params['id']);
        });
    };
    return BookExistsGuard;
}());
BookExistsGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__core_services_google_books__["a" /* GoogleBooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__core_services_google_books__["a" /* GoogleBooksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BookExistsGuard);

var _a, _b, _c;
//# sourceMappingURL=book-exists.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/models/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generateMockBook */
function generateMockBook() {
    return {
        id: '1',
        volumeInfo: {
            title: 'title',
            subtitle: 'subtitle',
            authors: ['author'],
            publisher: 'publisher',
            publishDate: '',
            description: 'description',
            averageRating: 3,
            ratingsCount: 5,
            imageLinks: {
                thumbnail: 'string',
                smallThumbnail: 'string',
            },
        },
    };
}
//# sourceMappingURL=book.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/reducers/books.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__("../../../../../dist/entity/@ngrx/entity.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_book__ = __webpack_require__("../../../../../example-app/app/books/actions/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_collection__ = __webpack_require__("../../../../../example-app/app/books/actions/collection.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return adapter; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedId; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



/**
 * createEntityAdapter creates many an object of helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
var adapter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])({
    selectId: function (book) { return book.id; },
    sortComparer: false,
});
/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
*/
var initialState = adapter.getInitialState({
    selectedBookId: null,
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_book__["b" /* SEARCH_COMPLETE */]:
        case __WEBPACK_IMPORTED_MODULE_2__actions_collection__["d" /* LOAD_SUCCESS */]: {
            return __assign({}, adapter.addMany(action.payload, state), { selectedBookId: state.selectedBookId });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_book__["c" /* LOAD */]: {
            return __assign({}, adapter.addOne(action.payload, state), { selectedBookId: state.selectedBookId });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_book__["d" /* SELECT */]: {
            return __assign({}, state, { selectedBookId: action.payload });
        }
        default: {
            return state;
        }
    }
}
/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
var getSelectedId = function (state) { return state.selectedBookId; };
//# sourceMappingURL=books.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/reducers/collection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_collection__ = __webpack_require__("../../../../../example-app/app/books/actions/collection.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getIds; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loaded: false,
    loading: false,
    ids: [],
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["c" /* LOAD */]: {
            return __assign({}, state, { loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["d" /* LOAD_SUCCESS */]: {
            return {
                loaded: true,
                loading: false,
                ids: action.payload.map(function (book) { return book.id; }),
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["e" /* ADD_BOOK_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["f" /* REMOVE_BOOK_FAIL */]: {
            if (state.ids.indexOf(action.payload.id) > -1) {
                return state;
            }
            return __assign({}, state, { ids: state.ids.concat([action.payload.id]) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["g" /* REMOVE_BOOK_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions_collection__["h" /* ADD_BOOK_FAIL */]: {
            return __assign({}, state, { ids: state.ids.filter(function (id) { return id !== action.payload.id; }) });
        }
        default: {
            return state;
        }
    }
}
var getLoaded = function (state) { return state.loaded; };
var getLoading = function (state) { return state.loading; };
var getIds = function (state) { return state.ids; };
//# sourceMappingURL=collection.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../../dist/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search__ = __webpack_require__("../../../../../example-app/app/books/reducers/search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books__ = __webpack_require__("../../../../../example-app/app/books/reducers/books.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection__ = __webpack_require__("../../../../../example-app/app/books/reducers/collection.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* unused harmony export getBooksState */
/* unused harmony export getBookEntitiesState */
/* unused harmony export getSelectedBookId */
/* unused harmony export getBookIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getBookEntities; });
/* unused harmony export getAllBooks */
/* unused harmony export getTotalBooks */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedBook; });
/* unused harmony export getSearchState */
/* unused harmony export getSearchBookIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSearchLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSearchResults; });
/* unused harmony export getCollectionState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCollectionLoaded; });
/* unused harmony export getCollectionLoading */
/* unused harmony export getCollectionBookIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getBookCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isSelectedBookInCollection; });




var reducers = {
    search: __WEBPACK_IMPORTED_MODULE_1__search__["a" /* reducer */],
    books: __WEBPACK_IMPORTED_MODULE_2__books__["a" /* reducer */],
    collection: __WEBPACK_IMPORTED_MODULE_3__collection__["a" /* reducer */],
};
/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */
/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
var getBooksState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('books');
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
var getBookEntitiesState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getBooksState, function (state) { return state.books; });
var getSelectedBookId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getBookEntitiesState, __WEBPACK_IMPORTED_MODULE_2__books__["b" /* getSelectedId */]);
/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reducers boilerplate
 * in selecting records from the entity state.
 */
var getBookIds = (_a = __WEBPACK_IMPORTED_MODULE_2__books__["c" /* adapter */].getSelectors(getBookEntitiesState), _a.selectIds), getBookEntities = _a.selectEntities, getAllBooks = _a.selectAll, getTotalBooks = _a.selectTotal;
var getSelectedBook = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getBookEntities, getSelectedBookId, function (entities, selectedId) {
    return selectedId && entities[selectedId];
});
/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
var getSearchState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getBooksState, function (state) { return state.search; });
var getSearchBookIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__search__["b" /* getIds */]);
var getSearchQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__search__["c" /* getQuery */]);
var getSearchLoading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__search__["d" /* getLoading */]);
/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
var getSearchResults = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getBookEntities, getSearchBookIds, function (books, searchIds) {
    return searchIds.map(function (id) { return books[id]; });
});
var getCollectionState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getBooksState, function (state) { return state.collection; });
var getCollectionLoaded = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getCollectionState, __WEBPACK_IMPORTED_MODULE_3__collection__["b" /* getLoaded */]);
var getCollectionLoading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getCollectionState, __WEBPACK_IMPORTED_MODULE_3__collection__["c" /* getLoading */]);
var getCollectionBookIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getCollectionState, __WEBPACK_IMPORTED_MODULE_3__collection__["d" /* getIds */]);
var getBookCollection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getBookEntities, getCollectionBookIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
var isSelectedBookInCollection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getCollectionBookIds, getSelectedBookId, function (ids, selected) {
    return ids.indexOf(selected) > -1;
});
var _a;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../example-app/app/books/reducers/search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_book__ = __webpack_require__("../../../../../example-app/app/books/actions/book.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLoading; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    ids: [],
    loading: false,
    query: '',
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_book__["a" /* SEARCH */]: {
            var query = action.payload;
            if (query === '') {
                return {
                    ids: [],
                    loading: false,
                    query: query,
                };
            }
            return __assign({}, state, { query: query, loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_book__["b" /* SEARCH_COMPLETE */]: {
            return {
                ids: action.payload.map(function (book) { return book.id; }),
                loading: false,
                query: state.query,
            };
        }
        default: {
            return state;
        }
    }
}
var getIds = function (state) { return state.ids; };
var getQuery = function (state) { return state.query; };
var getLoading = function (state) { return state.loading; };
//# sourceMappingURL=search.js.map

/***/ }),

/***/ "../../../../../example-app/app/shared/pipes/add-commas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCommasPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddCommasPipe = (function () {
    function AddCommasPipe() {
    }
    AddCommasPipe.prototype.transform = function (authors) {
        if (!authors) {
            return 'Author Unknown';
        }
        switch (authors.length) {
            case 0:
                return 'Author Unknown';
            case 1:
                return authors[0];
            case 2:
                return authors.join(' and ');
            default:
                var last = authors[authors.length - 1];
                var remaining = authors.slice(0, -1);
                return remaining.join(', ') + ", and " + last;
        }
    };
    return AddCommasPipe;
}());
AddCommasPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Pipe */])({ name: 'bcAddCommas' })
], AddCommasPipe);

//# sourceMappingURL=add-commas.js.map

/***/ }),

/***/ "../../../../../example-app/app/shared/pipes/ellipsis.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EllipsisPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EllipsisPipe = (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (str, strLength) {
        if (strLength === void 0) { strLength = 250; }
        var withoutHtml = str.replace(/(<([^>]+)>)/gi, '');
        if (str.length >= strLength) {
            return withoutHtml.slice(0, strLength) + "...";
        }
        return withoutHtml;
    };
    return EllipsisPipe;
}());
EllipsisPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Pipe */])({ name: 'bcEllipsis' })
], EllipsisPipe);

//# sourceMappingURL=ellipsis.js.map

/***/ }),

/***/ "../../../../../example-app/app/shared/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_commas__ = __webpack_require__("../../../../../example-app/app/shared/pipes/add-commas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ellipsis__ = __webpack_require__("../../../../../example-app/app/shared/pipes/ellipsis.ts");
/* unused harmony export PIPES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PIPES = [__WEBPACK_IMPORTED_MODULE_1__add_commas__["a" /* AddCommasPipe */], __WEBPACK_IMPORTED_MODULE_2__ellipsis__["a" /* EllipsisPipe */]];
var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: PIPES,
        exports: PIPES,
    })
], PipesModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/distinctUntilChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var distinctUntilChanged_1 = __webpack_require__("../../../../rxjs/operator/distinctUntilChanged.js");
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var filter_1 = __webpack_require__("../../../../rxjs/operator/filter.js");
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeMap_1 = __webpack_require__("../../../../rxjs/operator/mergeMap.js");
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/pluck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var pluck_1 = __webpack_require__("../../../../rxjs/operator/pluck.js");
Observable_1.Observable.prototype.pluck = pluck_1.pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/skip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var skip_1 = __webpack_require__("../../../../rxjs/operator/skip.js");
Observable_1.Observable.prototype.skip = skip_1.skip;
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/switchMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var switchMap_1 = __webpack_require__("../../../../rxjs/operator/switchMap.js");
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/takeUntil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var takeUntil_1 = __webpack_require__("../../../../rxjs/operator/takeUntil.js");
Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/toArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var toArray_1 = __webpack_require__("../../../../rxjs/operator/toArray.js");
Observable_1.Observable.prototype.toArray = toArray_1.toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "../../../../rxjs/observable/DeferObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var DeferObservable = (function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
        _super.call(this);
        this.observableFactory = observableFactory;
    }
    /**
     * Creates an Observable that, on subscribe, calls an Observable factory to
     * make an Observable for each new Observer.
     *
     * <span class="informal">Creates the Observable lazily, that is, only when it
     * is subscribed.
     * </span>
     *
     * <img src="./img/defer.png" width="100%">
     *
     * `defer` allows you to create the Observable only when the Observer
     * subscribes, and create a fresh Observable for each Observer. It waits until
     * an Observer subscribes to it, and then it generates an Observable,
     * typically with an Observable factory function. It does this afresh for each
     * subscriber, so although each subscriber may think it is subscribing to the
     * same Observable, in fact each subscriber gets its own individual
     * Observable.
     *
     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
     * var clicksOrInterval = Rx.Observable.defer(function () {
     *   if (Math.random() > 0.5) {
     *     return Rx.Observable.fromEvent(document, 'click');
     *   } else {
     *     return Rx.Observable.interval(1000);
     *   }
     * });
     * clicksOrInterval.subscribe(x => console.log(x));
     *
     * // Results in the following behavior:
     * // If the result of Math.random() is greater than 0.5 it will listen
     * // for clicks anywhere on the "document"; when document is clicked it
     * // will log a MouseEvent object to the console. If the result is less
     * // than 0.5 it will emit ascending numbers, one every second(1000ms).
     *
     * @see {@link create}
     *
     * @param {function(): SubscribableOrPromise} observableFactory The Observable
     * factory function to invoke for each Observer that subscribes to the output
     * Observable. May also return a Promise, which will be converted on the fly
     * to an Observable.
     * @return {Observable} An Observable whose Observers' subscriptions trigger
     * an invocation of the given Observable factory function.
     * @static true
     * @name defer
     * @owner Observable
     */
    DeferObservable.create = function (observableFactory) {
        return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function (subscriber) {
        return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
}(Observable_1.Observable));
exports.DeferObservable = DeferObservable;
var DeferSubscriber = (function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
        _super.call(this, destination);
        this.factory = factory;
        this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
        try {
            this._callFactory();
        }
        catch (err) {
            this._error(err);
        }
    };
    DeferSubscriber.prototype._callFactory = function () {
        var result = this.factory();
        if (result) {
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return DeferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=DeferObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/defer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DeferObservable_1 = __webpack_require__("../../../../rxjs/observable/DeferObservable.js");
exports.defer = DeferObservable_1.DeferObservable.create;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "../../../../rxjs/operator/toArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return this.lift(new ToArrayOperator());
}
exports.toArray = toArray;
var ToArrayOperator = (function () {
    function ToArrayOperator() {
    }
    ToArrayOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ToArraySubscriber(subscriber));
    };
    return ToArrayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ToArraySubscriber = (function (_super) {
    __extends(ToArraySubscriber, _super);
    function ToArraySubscriber(destination) {
        _super.call(this, destination);
        this.array = [];
    }
    ToArraySubscriber.prototype._next = function (x) {
        this.array.push(x);
    };
    ToArraySubscriber.prototype._complete = function () {
        this.destination.next(this.array);
        this.destination.complete();
    };
    return ToArraySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=toArray.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map