import { ToJSONPipe } from './to-json.pipe';

describe('ToJSONPipe', () => {
  it('create an instance', () => {
    const pipe = new ToJSONPipe();
    expect(pipe).toBeTruthy();
  });
});
