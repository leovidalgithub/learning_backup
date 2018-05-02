# Plesk server issues

* When I was unable to login to Rundcube webmail.leovidal.es because **"Error connecting to IMAP server"**, I could fix it by:

```
in /usr/share/psa-roundcube/config/defaults.inc.php

change
'verify_peer' => true,
to
'verify_peer' => false,
```

---

* 
