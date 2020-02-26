 
import { Selector } from 'testcafe'
import normalAdmin from '../roles/admin'

fixture `/admin`
  .beforeEach(async t => {
    await t
      .useRole(normalAdmin)
      .navigateTo('http://localhost:3000/admin/orders')
  });

test('dasboard', async t => {
  const adminHeader = await Selector('.header')
  const adminDasboard = await Selector('.nav')
  const adminItem = await Selector('.title').withText('出品管理')
  const adminOrder = await Selector('.title').withText('利用一覧')
  const adminItemStock = await Selector('.title').withText('在庫一覧')
  const adminTS = await Selector('.title').withText('支払管理')
  const adminAdminUser = await Selector('.title').withText('ユーザー管理')
  const adminMasterData = await Selector('.title').withText('マスタ管理')
  const adminItemReview = await Selector('.title').withText('レビュー管理')
  const adminItemSP = await Selector('.title').withText('サポート関連')
  const adminSetting = await Selector('.title').withText('管理画面設定')
  const adminLog = await Selector('.title').withText('システムログ')
  await t
    .expect(adminHeader.visible)
    .ok()
    .expect(adminDasboard.visible)
    .ok()
    .expect(adminItem.visible)
    .ok()
    .expect(adminOrder.visible)
    .ok()
    .expect(adminItemStock.visible)
    .ok()
    .expect(adminTS.visible)
    .ok()
    .expect(adminAdminUser.visible)
    .ok()
    .expect(adminMasterData.visible)
    .ok()
    .expect(adminItemReview.visible)
    .ok()
    .expect(adminItemSP.visible)
    .ok()
    .expect(adminSetting.visible)
    .ok()
    .expect(adminLog.visible)
    .ok() 
})
