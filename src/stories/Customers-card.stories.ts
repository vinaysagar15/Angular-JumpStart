import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { TrackByService } from 'src/app/core/services/trackby.service';
import { RouterTestingModule } from '@angular/router/testing';
import { customers } from '../app/shared/mocks';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersCardComponent } from 'src/app/customers/customers-card/customers-card.component';

export default {
  title: 'Example/Customer Cards',
  component: CustomersCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule, SharedModule],
      providers: [ TrackByService ]
    }),
  ],
} as Meta;

const Template: Story<CustomersCardComponent> = (args: CustomersCardComponent) => ({
  component: CustomersCardComponent,
  props: args,
});

export const CustomerCards = Template.bind({});
CustomerCards.args = { customers };

export const CustomerCards10 = Template.bind({});
CustomerCards10.args = { customers: customers.slice(0, 10) };

export const CustomerCards1 = Template.bind({});
CustomerCards1.args = { customers: customers.slice(0, 1) };

export const CustomerCards0 = Template.bind({});
CustomerCards0.args = { customers: null };

