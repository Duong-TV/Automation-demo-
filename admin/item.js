 
import { Selector } from 'testcafe'
import normalAdmin from '../roles/admin'

fixture `/admin`
  .beforeEach(async t => {
    await t
      .useRole(normalAdmin)
      .navigateTo('http://localhost:3000/admin/orders')
  });

test('logo', async t => {
  const adminLogo = await Selector('.logo')
  await t
    .expect(adminLogo.visible)
    .ok()
})

test('/dasboard', async t => {
  const adminHeader = await Selector('.header')
  const adminDasboard = await Selector('.nav')
  const adminItem = await Selector('.title').withText('出品管理')
  await t
    .expect(adminHeader.visible)
    .ok()
    .expect(adminDasboard.visible)
    .ok()
    .expect(adminItem.visible)
    .ok()
})

test('/search', async t => {
  await t
    .typeText('[name="q"]', 'Yuta Yamada')
    .click('button[type="submit"]')
})
