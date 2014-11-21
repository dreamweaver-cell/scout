# -*- coding: utf-8 -*-
"""

"main concept of MongoDB is embed whenever possible"
Ref: http://stackoverflow.com/questions/4655610#comment5129510_4656431
"""
from __future__ import absolute_import, unicode_literals
from datetime import datetime

from ..extensions import db

class Whitelist(db.Document):
  email = db.EmailField(required=True, unique=True)
  created_at = db.DateTimeField(default=datetime.now)
  default_institute = db.ReferenceField('Institute')
