

title = 'Surface significance test'

framec='OliveDrab'

v[0] = ['sign']
t[0] = ['Significance']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL','METCOOP','CoastNorway','NorthNorway','NorthNorwayPureCoast','NorthNorwayFjordRegions','NorthNorwayMountain','NorthNorwayInland','SvalbardBarents'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','DD','TT','TD','RH','QQ','NN','PE']
t[4] = ['Mslp','U10m','Wind direction','T2m','Td2m','Rh2m','Q2m','Cloud cover','PE']
v[5] = [0]
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['CTL_DEV']
t[6] = ['CTL_DEV']
v[7] = ['ALL'] ;
t[7] = v[7] ;

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Initial time']
loc = ['l','l','t','t','l','l','t','l']
spec_name =[0,1,2,3,7,6,4,5]
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'Observation verification comparison between       <br> preop2      '; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html']
