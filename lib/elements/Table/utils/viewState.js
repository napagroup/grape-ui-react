"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getTableViewState = exports.getPaginationViewState = void 0;

const getPaginationViewState = props => {
  const {
    showPagination,
    showPaginationBottom,
    showPaginationTop
  } = props;
  return {
    paginationBottom: {
      visible: showPagination && showPaginationBottom || showPagination && !showPaginationTop
    },
    paginationTop: {
      visible: showPagination && showPaginationTop
    }
  };
};

exports.getPaginationViewState = getPaginationViewState;

const getTableViewState = props => ({ ...getPaginationViewState(props)
});

exports.getTableViewState = getTableViewState;