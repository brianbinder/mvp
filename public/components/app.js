'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      users: ['Bobby', 'Jill', 'Martha']
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchUsers();
    }
  }, {
    key: 'fetchUsers',
    value: function fetchUsers() {
      var context = this;
      $.get('/users', function (users) {
        context.setState({
          users: users
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'App Container' },
        React.createElement(
          'h1',
          null,
          'Simply Blogging'
        ),
        React.createElement(UserList, { users: this.state.users })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidXNlcnMiLCJmZXRjaFVzZXJzIiwiY29udGV4dCIsIiQiLCJnZXQiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixRQUFsQjtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLFVBQUw7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUMsVUFBVSxJQUFkO0FBQ0FDLFFBQUVDLEdBQUYsQ0FBTSxRQUFOLEVBQWdCLFVBQVNKLEtBQVQsRUFBZ0I7QUFDOUJFLGdCQUFRRyxRQUFSLENBQWlCO0FBQ2ZMLGlCQUFPQTtBQURRLFNBQWpCO0FBR0QsT0FKRDtBQUtEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLFFBQUQsSUFBVSxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBNUI7QUFGRixPQURGO0FBTUQ7Ozs7RUE3QmVNLE1BQU1DLFM7O0FBZ0N4QkMsT0FBT1gsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyczogWydCb2JieScsICdKaWxsJywgJ01hcnRoYSddXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hVc2VycygpO1xuICB9XG5cbiAgZmV0Y2hVc2VycygpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgJC5nZXQoJy91c2VycycsIGZ1bmN0aW9uKHVzZXJzKSB7XG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgdXNlcnM6IHVzZXJzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBDb250YWluZXJcIj5cbiAgICAgICAgPGgxPlNpbXBseSBCbG9nZ2luZzwvaDE+XG4gICAgICAgIDxVc2VyTGlzdCB1c2Vycz17dGhpcy5zdGF0ZS51c2Vyc30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==