launchpad-karma
===============

A simple script to track your `Launchpad karma
<https://help.launchpad.net/YourAccount/Karma>`_ over time.

It's meant to be run on a daily basis (usually by ``cron``).  At every
run, it collects the karma for the current day and stores it in an
SQLite database. Then it regenerates graphs and the index HTML page in
the specified target directory.

Setting it up
-------------

1. get the source tree::

     $ git clone https://ack@bitbucket.org/ack/launchpad-karma.git
     $ cd launchpad-karma


2. edit ``launchpad-karma.ini``, setting the ``user`` key to your
   launchpad username.  You can also customize the target directory
   and the number of months of data to collect.


3. edit your crontab::

     $ crontab -e

   by adding something like this (which makes the script run at 1am each day)::

     # m h  dom mon dow   command
     0 1 * * * /home/ack/launchpad-karma/launchpad-karma
