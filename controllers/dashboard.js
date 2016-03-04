/**
 * Created by zizhouzhai on 3/1/16.
 */

exports.getEmployeeDashboard = function(req, res) {
    if (!req.user) {

        return res.redirect('/login_employee');
    }
    res.render('dashboard_employee',{user : req.user, layout: 'navigation_employee'});
};

exports.getBusinessOwnerDashboard = function(req, res) {
    if (!req.user) {
        return res.redirect('/login');
    }
    res.render('dashboard_admin', {user : req.user, layout: 'navigation_admin'});
};