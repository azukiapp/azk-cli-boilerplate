import { CliControllers } from 'cli-router';

export default class HelpController extends CliControllers.Help {
  index(params, cli) {
    const usage = super.index(params, cli);
    console.log(usage);
    return 0;
  }
}

export default HelpController;
