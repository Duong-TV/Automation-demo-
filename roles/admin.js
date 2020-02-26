import { Role } from 'testcafe';

const normalAdmin = Role('http://localhost:3000/admin/sign_in', async t => {
  await t
    .typeText('[name="admin_user[email]"]', 'normal_admin@framgia.com')
    .typeText('[name="admin_user[password]"]', 'Aa@123456')
    .click('[name="commit"]')
}, { preserveUrl: true })

export default normalAdmin
