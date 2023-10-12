
// Input file

title = 'Surface skill scores'

framec='RoyalBlue'

v[0] = ['farc','podc','kc','fbc','aic','sedsc','etsc','fc']
t[0] = ['False alarme ratio','Probability of detection','Kuiper skill score','Freq bias','Area index','Symmetric Extreme Dependency Score','Equitable threat score','Frequency']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] =['ALL','METCOOP','CoastNorway','NorthNorway','NorthNorwayPureCoast','NorthNorwayFjordRegions','NorthNorwayMountain','NorthNorwayInland','SvalbardBarents'] ;
t[3] = v[3] ;
v[4] = ['FF','TT','RH','NN']
t[4] = ['U10m','T2m','Rh2m','Cloud cover']
v[5] =[0]
v[5] =v[5].reverse()
t[5] =v[5]
v[6] =['thresholds','classes']
t[6] =v[6]
v[7] =['ALL'] ;
t[7] = v[7] ;

spec_name =[0,1,2,3,7,4,5,6]

mname = ['Score','Period','Station','Selection','Parameter','Level','Type','Initial time']
loc =['t','l','t','t','l','l','l','l']
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'Observation verification comparison between       <br> preop2      '; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Cont']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/c_[1]_00000000_[3]_[7]_[4]_0.html']

