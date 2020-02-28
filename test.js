import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://devexpress.github.io/testcafe/example`;

const checkbox = Selector('#remote-testing');

test('My first test', async t => {
    await t
    .click(checkbox)
    .expect(checkbox.checked).ok()
    .click('#submit-button')
});
