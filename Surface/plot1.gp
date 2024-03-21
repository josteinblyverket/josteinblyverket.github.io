set terminal png
set output "fc_00000000_00000000_SvalbardBarents_ALL_TT_0_classes.1.png"
set datafile missing "-99"
set title "Frequency  for T2m (deg C)\n   Selection: SvalbardBarents      4 stations\n  Period: 19920924-19920930\n  Used {00,03,...,21} + 00 03" 

set style line 1 lt 0 lw 1 pt 5 # use black thin lines
set style line 2 lt 8 lw 1 pt 1 # use black thicker lines
set grid
set xlabel "classes C)"
set ylabel "Frequency"

 
 set arrow  1 from  -30.0000000,graph 0.05 to  -30.0000000,graph 0.01 lt -1 lw 2 
 set arrow  2 from  -20.0000000,graph 0.05 to  -20.0000000,graph 0.01 lt -1 lw 2 
 set arrow  3 from  -15.0000000,graph 0.05 to  -15.0000000,graph 0.01 lt -1 lw 2 
 set arrow  4 from  -10.0000000,graph 0.05 to  -10.0000000,graph 0.01 lt -1 lw 2 
 set arrow  5 from  -5.00000000,graph 0.05 to  -5.00000000,graph 0.01 lt -1 lw 2 
 set arrow  6 from  0.00000000,graph 0.05 to  0.00000000,graph 0.01 lt -1 lw 2 
 set arrow  7 from  5.00000000,graph 0.05 to  5.00000000,graph 0.01 lt -1 lw 2 
 set arrow  8 from  10.0000000,graph 0.05 to  10.0000000,graph 0.01 lt -1 lw 2 
 set arrow  9 from  15.0000000,graph 0.05 to  15.0000000,graph 0.01 lt -1 lw 2 
 set arrow  10 from  20.0000000,graph 0.05 to  20.0000000,graph 0.01 lt -1 lw 2 
 set arrow  11 from  25.0000000,graph 0.05 to  25.0000000,graph 0.01 lt -1 lw 2 
 set arrow  12 from  30.0000000,graph 0.05 to  30.0000000,graph 0.01 lt -1 lw 2
 plot 'c_00000000_00000000_SvalbardBarents_ALL_TT_0_CTL.scores2' using 1:13 title 'OBS' with linespoints lt 3 lw 2 pt 7,'c_00000000_00000000_SvalbardBarents_ALL_TT_0_CTL.scores2' using 1:14 title 'CTL' with linespoints lt 1 lw 2 pt 7,'c_00000000_00000000_SvalbardBarents_ALL_TT_0_DEV.scores2' using 1:14 title 'DEV' with linespoints lt 2 lw 2 pt 7