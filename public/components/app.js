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
      users: ['Bobby', 'Jill', 'Martha'],
      posts: [{
        username: 'Bobby',
        body: 'Beautiful day!',
        date: new Date()
      }, {
        username: 'Jill',
        body: 'Taking a walk!',
        date: new Date()
      }, {
        username: 'Martha',
        body: 'Admiring the view on this wonderful morning.',
        date: new Date()
      }]
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
        React.createElement(UserList, { users: this.state.users }),
        React.createElement(PostList, { posts: this.state.posts })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidXNlcnMiLCJwb3N0cyIsInVzZXJuYW1lIiwiYm9keSIsImRhdGUiLCJEYXRlIiwiZmV0Y2hVc2VycyIsImNvbnRleHQiLCIkIiwiZ2V0Iiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsUUFBbEIsQ0FESTtBQUVYQyxhQUFPLENBQUM7QUFDTkMsa0JBQVUsT0FESjtBQUVOQyxjQUFNLGdCQUZBO0FBR05DLGNBQU0sSUFBSUMsSUFBSjtBQUhBLE9BQUQsRUFJSjtBQUNESCxrQkFBVSxNQURUO0FBRURDLGNBQU0sZ0JBRkw7QUFHREMsY0FBTSxJQUFJQyxJQUFKO0FBSEwsT0FKSSxFQVFKO0FBQ0RILGtCQUFVLFFBRFQ7QUFFREMsY0FBTSw4Q0FGTDtBQUdEQyxjQUFNLElBQUlDLElBQUo7QUFITCxPQVJJO0FBRkksS0FBYjtBQUZpQjtBQWtCbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLFVBQUw7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUMsVUFBVSxJQUFkO0FBQ0FDLFFBQUVDLEdBQUYsQ0FBTSxRQUFOLEVBQWdCLFVBQVNULEtBQVQsRUFBZ0I7QUFDOUJPLGdCQUFRRyxRQUFSLENBQWlCO0FBQ2ZWLGlCQUFPQTtBQURRLFNBQWpCO0FBR0QsT0FKRDtBQUtEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLFFBQUQsSUFBVSxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBNUIsR0FGRjtBQUdFLDRCQUFDLFFBQUQsSUFBVSxPQUFPLEtBQUtELEtBQUwsQ0FBV0UsS0FBNUI7QUFIRixPQURGO0FBT0Q7Ozs7RUEzQ2VVLE1BQU1DLFM7O0FBOEN4QkMsT0FBT2hCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcnM6IFsnQm9iYnknLCAnSmlsbCcsICdNYXJ0aGEnXSxcbiAgICAgIHBvc3RzOiBbe1xuICAgICAgICB1c2VybmFtZTogJ0JvYmJ5JyxcbiAgICAgICAgYm9keTogJ0JlYXV0aWZ1bCBkYXkhJyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgICAgfSwge1xuICAgICAgICB1c2VybmFtZTogJ0ppbGwnLFxuICAgICAgICBib2R5OiAnVGFraW5nIGEgd2FsayEnLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpXG4gICAgICB9LCB7XG4gICAgICAgIHVzZXJuYW1lOiAnTWFydGhhJyxcbiAgICAgICAgYm9keTogJ0FkbWlyaW5nIHRoZSB2aWV3IG9uIHRoaXMgd29uZGVyZnVsIG1vcm5pbmcuJyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgICAgfV1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFVzZXJzKCk7XG4gIH1cblxuICBmZXRjaFVzZXJzKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAkLmdldCgnL3VzZXJzJywgZnVuY3Rpb24odXNlcnMpIHtcbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICB1c2VyczogdXNlcnNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIENvbnRhaW5lclwiPlxuICAgICAgICA8aDE+U2ltcGx5IEJsb2dnaW5nPC9oMT5cbiAgICAgICAgPFVzZXJMaXN0IHVzZXJzPXt0aGlzLnN0YXRlLnVzZXJzfS8+XG4gICAgICAgIDxQb3N0TGlzdCBwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==