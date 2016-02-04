import h from './spec_helper';
import Main from '../src/main';

describe('AzkBenchmark:', () => {
  it('should run main', () => {
    const main = new Main();
    return h.expect(main.run()).to.eventually.equal('TODO: Hello World');
  });
});
