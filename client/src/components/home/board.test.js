import React from 'react';
import { render, cleanup } from '../../__tests__/setupTests';
import Board from './board';

afterEach(cleanup);

const setup = (state = { lastScrollY: 0 }) => render(<Board {...state} />);

describe('<Board />', () => {
  it('should render successfully', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('should render naver map properly', () => {
    it('should trigger a event listner', async () => {
      const map = {};
      global.window.addEventListener = jest.fn((event, handler) => {
        map[event] = handler;
      });
      const wrapper = setup();
      map.scroll({ scrollY: 1200 });
      expect(global.window.addEventListener).toHaveBeenCalled();
    });

    it('should remove event listener when component unmounts ', () => {
      const removeEventListenerSpy = jest.spyOn(
        global.window,
        'removeEventListener',
      );
      const wrapper = setup();
      wrapper.unmount();
      expect(removeEventListenerSpy).toHaveBeenCalled();
    });
  });
});
